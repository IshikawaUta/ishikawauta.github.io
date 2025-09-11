/**
 * @fileOverview Schemas for the send-email-flow.
 */

import { z } from 'zod';

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
