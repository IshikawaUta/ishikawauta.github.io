
'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the contact form data.
 */

import { ai } from '@/ai/genkit';
import type { SendEmailInput, SendEmailOutput } from '@/ai/schemas/send-email-schema';
import { SendEmailInputSchema, SendEmailOutputSchema } from '@/ai/schemas/send-email-schema';

// This is the exported function that the client-side component will call.
export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service
    // like Resend, SendGrid, or Nodemailer here.
    // For this example, we are just simulating the email sending process.
    console.log("Simulating email send for:", input.email);

    // Since this is a simulation, we'll always return success.
    try {
      // Simulate a short delay to mimic a network request.
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true };
    } catch (error) {
      console.error("Error in sendEmailFlow simulation:", error);
      return { success: false, message: "Failed to process the email request." };
    }
  }
);
