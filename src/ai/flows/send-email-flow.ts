
'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the contact form data.
 * - SendEmailInput - The input type for the sendEmail function.
 * - SendEmailOutput - The return type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export const SendEmailOutputSchema = z.object({
  success: z.boolean().describe('Whether the email was sent successfully.'),
  message: z.string().optional().describe('An optional message about the result.'),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

// This is the exported function that the client-side component will call.
export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sendEmailPrompt',
  input: { schema: SendEmailInputSchema },
  output: { schema: SendEmailOutputSchema },
  prompt: `You are an email sending service. You have received a request to send an email.
  
From: {{{name}}} <{{{email}}}>
Message: 
{{{message}}}

Acknowledge the request and respond with a success status. For the purpose of this simulation, always assume the email is sent successfully.`,
});

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service
    // like Resend, SendGrid, or Nodemailer here.
    // For example:
    //
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@example.com',
    //   subject: `New message from ${input.name}`,
    //   html: `<p>From: ${input.name} (${input.email})</p><p>${input.message}</p>`,
    // });
    //
    // For this example, we will simulate the email sending with an AI call.

    try {
      const { output } = await prompt(input);
      // The prompt is instructed to always succeed.
      return output || { success: true };
    } catch (error) {
      console.error("Error in sendEmailFlow:", error);
      return { success: false, message: "Failed to process the email request." };
    }
  }
);
