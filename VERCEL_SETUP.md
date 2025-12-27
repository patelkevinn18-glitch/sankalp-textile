# Vercel Setup Guide - Titan Mail SMTP

This guide explains how to set up the contact form to send emails using your Titan Mail SMTP server on Vercel.

## Prerequisites

- A Vercel account (free tier works)
- A Titan Mail account with SMTP access
- Your Titan Mail SMTP credentials

## Step 1: Install Dependencies

```bash
npm install
```

This will install `nodemailer` and `@vercel/node` required for the serverless function.

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   vercel
   ```

   Follow the prompts to link your project.

### Option B: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the settings

## Step 3: Configure Environment Variables

After deploying, you need to add environment variables in Vercel:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

### Required Variables:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `SMTP_HOST` | Titan Mail SMTP server host | `smtp.titan.email` or `smtpout.secureserver.net` |
| `SMTP_PORT` | SMTP port number | `587` (TLS) or `465` (SSL) |
| `SMTP_USER` | Your Titan Mail email address | `contact@sankalptextile.com` |
| `SMTP_PASSWORD` | Your Titan Mail password | `your_password_here` |
| `RECIPIENT_EMAIL` | Where to send contact form submissions | `contact@sankalptextile.com` |

### Titan Mail SMTP Settings

Common Titan Mail SMTP settings:

- **SMTP Host**: 
  - `smtp.titan.email` (most common)
  - `smtpout.secureserver.net` (alternative)
  
- **SMTP Port**: 
  - `587` - Use with TLS (recommended)
  - `465` - Use with SSL
  
- **Security**: TLS/SSL enabled
- **Authentication**: Required (use your full email and password)

## Step 4: Redeploy

After adding environment variables:

1. Go to **Deployments** tab
2. Click the three dots (⋯) on the latest deployment
3. Click **Redeploy**

Or trigger a new deployment by pushing a commit to your repository.

## Step 5: Test the Contact Form

1. Visit your deployed website
2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your email inbox for the submission

## Troubleshooting

### Email Not Sending

1. **Verify SMTP Credentials**:
   - Double-check your SMTP host, port, username, and password
   - Make sure there are no extra spaces in the environment variables

2. **Check Vercel Function Logs**:
   - Go to your Vercel project dashboard
   - Navigate to **Functions** → **send-email**
   - Check the logs for error messages

3. **Test SMTP Connection**:
   - Verify your Titan Mail account allows SMTP access
   - Some email providers require enabling "Less secure app access" or using app-specific passwords

4. **Common Errors**:
   - **"Authentication failed"**: Check your email and password
   - **"Connection timeout"**: Verify SMTP host and port
   - **"TLS/SSL error"**: Try switching between port 587 (TLS) and 465 (SSL)

### Function Not Found (404 Error)

- Make sure `api/send-email.ts` exists in your project root
- Verify `vercel.json` is configured correctly
- Redeploy after making changes

### CORS Errors

The function already includes CORS headers. If you still see CORS errors:
- Make sure you're calling `/api/send-email` (relative path)
- Check that the function is deployed correctly

## Security Notes

- ✅ Environment variables are encrypted in Vercel
- ✅ Never commit `.env` files to version control
- ✅ Use app-specific passwords when possible
- ✅ Consider adding rate limiting to prevent abuse

## Local Development

To test locally with Vercel:

```bash
vercel dev
```

This will run a local server that simulates Vercel's environment, including serverless functions.

**Note**: You'll still need to set environment variables. Create a `.env.local` file:

```env
SMTP_HOST=smtp.titan.email
SMTP_PORT=587
SMTP_USER=contact@sankalptextile.com
SMTP_PASSWORD=your_password
RECIPIENT_EMAIL=contact@sankalptextile.com
```

## Support

If you encounter issues:
1. Check Vercel function logs
2. Verify all environment variables are set correctly
3. Test your SMTP credentials with an email client first
4. Review the error messages in the browser console

