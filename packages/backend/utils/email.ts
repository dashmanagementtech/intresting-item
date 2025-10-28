export function welcomeEmailBuilder({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Monitora</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Roboto Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="max-width: 640px; background-color: #ffffff; position: relative;">

          <!-- Header -->
          <tr>
            <td style="background-color: #fff5f5; border-bottom: 0.2px solid #e9e9e9; padding: 16px 80px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1760946203/monitora/b669024f-74c5-47e7-8b93-e44992d78f42.png" alt="Monitora Logo" width="40" height="48" style="vertical-align: middle; margin-right: 4px;">
                    <span style="font-family: 'Roboto Serif', Helvetica; font-weight: 600; color: #a12029; font-size: 20px; line-height: 24px; vertical-align: middle;">Monitora</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 104px 32px 32px; position: relative;">

              <!-- Hero Image -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <div style="width: 100%; height: 180px; background: url('https://res.cloudinary.com/domingo-bucket/image/upload/v1760946409/monitora/778388fa-375a-4ac7-a3ff-4125bda7ae2f.png') center center / cover; border-radius: 12px;"></div>
                  </td>
                </tr>
              </table>

              <!-- Welcome Message -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <h2 style="margin: 0 0 8px; font-size: 28px; font-weight: 600; color: #a12029; text-align: center; line-height: 1.3;">Welcome to Monitora!</h2>
                    <p style="margin: 0; font-size: 14px; color: #737373; text-align: center; line-height: 1.5;">Your project management journey starts here</p>
                  </td>
                </tr>
              </table>

              <!-- Greeting Card -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td style="background-color: #fafafa; border-radius: 12px; padding: 24px;">
                    <p style="margin: 0 0 8px; font-size: 14px; text-align: center; line-height: 1.5;">
                      <span style="color: #202020;">Hi</span>
                      <span style="color: #69131b; font-weight: 600;"> ${name}</span>
                      <span style="color: #202020;">,</span>
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #737373; text-align: center; line-height: 1.6;">
                      Welcome to  Monitora! We’re excited to have you onboard. To proceed please login with your email address and use your email as password, <b>(you are encouraged to change your password after logging in for the first time.)</b>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Features Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #a12029; line-height: 1.5;">What you can do with Monitora:</h3>

                    <!-- Feature 1: Sprint Management -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px; background-color: #fffafa; border: 0.2px solid #d1b6b8; border-radius: 12px;">
                      <tr>
                        <td style="padding: 16px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 48px; height: 48px; background-color: #fff5f5; border-radius: 4px; padding: 4px; vertical-align: top;">
                                <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1760946472/monitora/07b3ee22-697d-4396-b48d-34b5d7fd01e1.png" alt="" width="32" height="32" style="display: block;">
                              </td>
                              <td style="padding-left: 8px; vertical-align: top;">
                                <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 500; color: #262626; line-height: 1.4;">Sprint Management</h4>
                                <p style="margin: 0; font-size: 12px; color: #737373; line-height: 1.5;">Organize your work into efficient sprints</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 2: Task Tracking -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px; background-color: #fffafa; border: 0.2px solid #d1b6b8; border-radius: 12px;">
                      <tr>
                        <td style="padding: 16px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 48px; height: 48px; background-color: #fff5f5; border-radius: 4px; padding: 4px; vertical-align: top;">
                                <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1760946503/monitora/369d4aa5-cdbb-473e-af04-9bd2b3b8d78a.png" alt="" width="32" height="32" style="display: block;">
                              </td>
                              <td style="padding-left: 8px; vertical-align: top;">
                                <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 500; color: #262626; line-height: 1.4;">Task Tracking</h4>
                                <p style="margin: 0; font-size: 12px; color: #737373; line-height: 1.5;">Monitor progress and stay on top of deadlines</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 3: Team Collaboration -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px; background-color: #fffafa; border: 0.2px solid #d1b6b8; border-radius: 12px;">
                      <tr>
                        <td style="padding: 16px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 48px; height: 48px; background-color: #fff5f5; border-radius: 4px; padding: 4px; vertical-align: top;">
                                <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1760946533/monitora/fce0ba10-4ca9-4470-94b6-6a5ad12da22c.png" alt="" width="32" height="32" style="display: block;">
                              </td>
                              <td style="padding-left: 8px; vertical-align: top;">
                                <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 500; color: #262626; line-height: 1.4;">Team Collaboration</h4>
                                <p style="margin: 0; font-size: 12px; color: #737373; line-height: 1.5;">Work seamlessly with your team members</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 4: Smart Notifications -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px; background-color: #fffafa; border: 0.2px solid #d1b6b8; border-radius: 12px;">
                      <tr>
                        <td style="padding: 16px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 48px; height: 48px; background-color: #fff5f5; border-radius: 4px; padding: 4px; vertical-align: top;">
                                <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1760946557/monitora/7141fc57-6243-4b90-860c-a49391daeeb3.png" alt="" width="32" height="32" style="display: block;">
                              </td>
                              <td style="padding-left: 8px; vertical-align: top;">
                                <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 500; color: #262626; line-height: 1.4;">Smart Notifications</h4>
                                <p style="margin: 0; font-size: 12px; color: #737373; line-height: 1.5;">Stay updated with automated alerts and reminders</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- CTA Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 8px; font-size: 12px; color: #737373; text-align: center; line-height: 1.6;">
                      Ready to get started? Access your dashboard and begin your first project.
                    </p>
                    <a href="${process.env.APP_URL}" style="display: inline-block; padding: 16px 32px; background-color: #a12029; color: #ffffff; text-decoration: none; border-radius: 8px; font-family: 'Roboto Serif', Helvetica; font-weight: 500; font-size: 16px; line-height: 1.4;">
                      Get Started →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Separator -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td style="border-top: 1px solid #e5e5e5;"></td>
                </tr>
              </table>

              <!-- Account Details -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #a12029; line-height: 1.5;">Your Account Details:</h3>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background-color: #fafafa; border-radius: 12px; padding: 24px;">
                          <p style="margin: 0 0 8px; font-size: 16px; color: #4d4d4d; line-height: 1.4;">
                            Email: <span style="color: #202020;">${email}</span>
                          </p>
                          <p style="margin: 0; font-size: 16px; color: #4d4d4d; line-height: 1.4;">
                            Account Status: <span style="color: #06952e; font-weight: 500;">Active</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Help Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td align="center">
                    <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #a12029; text-align: center; line-height: 1.5;">Need Help Getting Started?</h3>
                    <p style="margin: 0 0 16px; font-size: 12px; color: #737373; text-align: center; line-height: 1.6;">
                      Our support team is here to help you make the most of Monitora.
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td>
                          <a href="#" style="font-size: 14px; color: #a12029; text-decoration: none; padding: 0 8px;">Help Center</a>
                        </td>
                        <td style="padding: 0 4px;">
                          <span style="display: inline-block; width: 6px; height: 6px; background-color: #e5e5e5; border-radius: 3px;"></span>
                        </td>
                        <td>
                          <a href="#" style="font-size: 14px; color: #a12029; text-decoration: none; padding: 0 8px;">Contact Support</a>
                        </td>
                        <td style="padding: 0 4px;">
                          <span style="display: inline-block; width: 6px; height: 6px; background-color: #e5e5e5; border-radius: 3px;"></span>
                        </td>
                        <td>
                          <a href="#" style="font-size: 14px; color: #a12029; text-decoration: none; padding: 0 8px;">Documentation</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="background-color: #fafafa; border-radius: 12px; padding: 24px;" align="center">
                    <p style="margin: 0 0 8px; font-size: 12px; color: #737373; text-align: center; line-height: 1.6;">
                      This email was sent to ${email} because you signed up for Monitora.
                    </p>
                    <p style="margin: 0 0 16px; font-size: 12px; color: #737373; text-align: center; line-height: 1.6;">
                      © 2025 Monitora by Dash Tech Management. All Rights Reserved
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td>
                          <a href="#" style="font-size: 12px; color: #737373; text-decoration: none; padding: 0 8px;">Privacy Policy</a>
                        </td>
                        <td style="padding: 0 4px;">
                          <span style="display: inline-block; width: 6px; height: 6px; background-color: #e5e5e5; border-radius: 3px;"></span>
                        </td>
                        <td>
                          <a href="#" style="font-size: 12px; color: #737373; text-decoration: none; padding: 0 8px;">Terms of Service</a>
                        </td>
                        <td style="padding: 0 4px;">
                          <span style="display: inline-block; width: 6px; height: 6px; background-color: #e5e5e5; border-radius: 3px;"></span>
                        </td>
                        <td>
                          <a href="#" style="font-size: 12px; color: #737373; text-decoration: none; padding: 0 8px;">Unsubscribe</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function sprintStartedEmailBuilder({
  name,
  sprint,
  email,
  tasks,
}: {
  name: string;
  email: string;
  sprint: {
    title: string;
    goals: string;
    duration: string;
    tasks: number;
    due: string;
  };
  tasks: string;
}) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Sprint Started - Monitora</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

                    <!-- Header with Logo -->
                    <tr>
                        <td style="padding: 24px 40px; background-color: #e8d4d4; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 8px;">
                                            <rect width="32" height="32" rx="4" fill="#5A2C2C"/>
                                            <path d="M9 8h14v2H9V8zm0 4h14v2H9v-2zm0 4h14v2H9v-2zm0 4h10v2H9v-2z" fill="#ffffff"/>
                                            <circle cx="22" cy="22" r="3" fill="#D4A574"/>
                                        </svg>
                                        <span style="font-size: 24px; font-weight: 700; color: #5A2C2C; vertical-align: middle;">Monitora</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Hero Illustration Banner -->
                    <tr>
                        <td style="padding: 0;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #5A2C2C 0%, #7D3C3C 100%); padding: 40px; text-align: center;">
                                        <!-- Illustration placeholder - replace with your illustration -->
                                        <div style="background-color: rgba(255,255,255,0.1); border-radius: 8px; padding: 60px 20px; min-height: 140px;">
                                            <p style="color: #ffffff; font-size: 14px; margin: 0; opacity: 0.8;">
                                              <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1761170523/monitora/9006f48f-7795-49d2-abc0-c49b248d227f.png" style="width: 100%; height: auto;" />
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Heading -->
                    <tr>
                        <td style="padding: 32px 40px 16px 40px; text-align: center;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #5A2C2C; line-height: 1.3;">New Sprint Started!</h1>
                        </td>
                    </tr>

                    <!-- Subheading -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px; text-align: center;">
                            <p style="margin: 0; font-size: 16px; color: #666666; line-height: 1.5;">You have been assigned a new task in your sprint</p>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td style="padding: 0 40px 16px 40px;">
                            <p style="margin: 0; font-size: 16px; color: #5A2C2C; font-weight: 600; line-height: 1.5;">Hi ${name},</p>
                        </td>
                    </tr>

                    <!-- Intro Text -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <p style="margin: 0; font-size: 15px; color: #666666; line-height: 1.6;">A new sprint has started! Check your dashboard to view all the details and get started on your assigned tasks.</p>
                        </td>
                    </tr>

                    <!-- Sprint Details Card -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f3f3; border-radius: 8px; border: 1px solid #e8d4d4;">
                                <!-- Sprint Details Header -->
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: left;">
                                                    <span style="font-size: 16px; font-weight: 600; color: #5A2C2C;">Sprint Details</span>
                                                </td>
                                                <td style="text-align: right;">
                                                    <span style="display: inline-block; background-color: #d4f4dd; color: #2d7a4d; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 500;">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 4px;">
                                                            <path d="M7 0L8.09 4.26L12 5L8.09 5.74L7 10L5.91 5.74L2 5L5.91 4.26L7 0Z" fill="#2d7a4d"/>
                                                        </svg>
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Sprint Title -->
                                <tr>
                                    <td style="padding: 0 24px 12px 24px;">
                                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #333333;">
                                          ${sprint.title}
                                        </h2>
                                    </td>
                                </tr>

                                <!-- Goal Section -->
                                <tr>
                                    <td style="padding: 0 24px 20px 24px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="vertical-align: top; padding-right: 8px;">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: 2px;">
                                                        <circle cx="8" cy="8" r="6" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                        <path d="M8 4v4l3 3" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                    </svg>
                                                </td>
                                                <td>
                                                    <p style="margin: 0; font-size: 14px; color: #666666; font-weight: 600; margin-bottom: 4px;">Goal</p>
                                                    <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.5;">
                                                      ${sprint.goals}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Sprint Stats Cards -->
                                <tr>
                                    <td style="padding: 0 24px 24px 24px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <!-- Duration Card -->
                                                <td style="width: 33%; padding-right: 8px;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                                        <tr>
                                                            <td style="padding: 16px; text-align: center;">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 8px;">
                                                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                                    <path d="M4 9h16M9 4v2M15 4v2" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                                </svg>
                                                                <p style="margin: 0; font-size: 12px; color: #999999; margin-bottom: 4px;">Duration</p>
                                                                <p style="margin: 0; font-size: 16px; font-weight: 700; color: #333333;">
                                                                  ${sprint.duration}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>

                                                <!-- Tasks Card -->
                                                <td style="width: 33%; padding-right: 8px;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                                        <tr>
                                                            <td style="padding: 16px; text-align: center;">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 8px;">
                                                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                                    <path d="M8 8h8M8 12h8M8 16h5" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                                </svg>
                                                                <p style="margin: 0; font-size: 12px; color: #999999; margin-bottom: 4px;">Tasks</p>
                                                                <p style="margin: 0; font-size: 16px; font-weight: 700; color: #333333;">
                                                                  ${sprint.tasks}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>

                                                <!-- Due Date Card -->
                                                <td style="width: 34%;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                                        <tr>
                                                            <td style="padding: 16px; text-align: center;">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 8px;">
                                                                    <circle cx="12" cy="12" r="8" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                                    <path d="M12 7v5l3 3" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                                </svg>
                                                                <p style="margin: 0; font-size: 12px; color: #999999; margin-bottom: 4px;">Due Date</p>
                                                                <p style="margin: 0; font-size: 14px; font-weight: 700; color: #333333;">${sprint.due}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Top Priority Tasks Section -->
                    <tr>
                        <td style="padding: 0 40px 24px 40px;">
                            <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #5A2C2C;">Top Priority Tasks</h3>
                        </td>
                    </tr>

                    ${tasks}

                    <!-- Instructions Text -->
                    <tr>
                        <td style="padding: 0 40px 24px 40px;">
                            <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.6; text-align: center;">Click the link below to view the full task details and start working.</p>
                        </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                                <tr>
                                    <td style="border-radius: 6px; background-color: #5A2C2C;">
                                        <a href="${process.env.APP_URL}" style="display: inline-block; padding: 14px 32px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none;">
                                            View Task Details →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Separator -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="border-top: 1px solid #e8d4d4;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Contact Text -->
                    <tr>
                        <td style="padding: 0 40px 16px 40px;">
                            <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.6;">Have any questions about this task? Reach out to Bamidele or your project manager for clarification.</p>
                        </td>
                    </tr>

                    <!-- Sign Off -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <p style="margin: 0 0 4px 0; font-size: 14px; color: #666666;">Best regards,</p>
                            <p style="margin: 0; font-size: 14px; color: #333333; font-weight: 600;">The Monitora Team.</p>
                        </td>
                    </tr>

                    <!-- Help Section -->
                    <tr>
                        <td style="padding: 32px 40px; background-color: #f9f3f3; border-top: 1px solid #e8d4d4; text-align: center;">
                            <h4 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #5A2C2C;">Need Help Getting Started?</h4>
                            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666666; line-height: 1.5;">Our support team is here to help you make the most of Monitora.</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="${process.env.APP_URL}" style="font-size: 14px; color: #5A2C2C; text-decoration: none; font-weight: 500;">Help Center</a>
                                    </td>
                                    <td style="text-align: center; color: #cccccc; font-size: 14px;">•</td>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="${process.env.APP_URL}" style="font-size: 14px; color: #5A2C2C; text-decoration: none; font-weight: 500;">Contact Support</a>
                                    </td>
                                    <td style="text-align: center; color: #cccccc; font-size: 14px;">•</td>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="${process.env.APP_URL}" style="font-size: 14px; color: #5A2C2C; text-decoration: none; font-weight: 500;">Documentation</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 32px 40px; background-color: #e8d4d4; text-align: center;">
                            <p style="margin: 0 0 16px 0; font-size: 12px; color: #666666; line-height: 1.5;">This email was sent to ${email} because you were part of a project on Monitora.</p>
                            <p style="margin: 0 0 16px 0; font-size: 12px; color: #999999;">© 2025 Monitora by DASH Technology Management. All Rights Reserved</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 12px; color: #666666; text-decoration: none;">Privacy Policy</a>
                                    </td>
                                    <td style="text-align: center; color: #cccccc; font-size: 12px;">•</td>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 12px; color: #666666; text-decoration: none;">Terms of Service</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
}

export function taskTableBuilderForEmail(task: { title: string; due: string }) {
  return `
    <tr>
      <td style="padding: 0 40px 16px 40px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <tr>
                  <td style="vertical-align: top; width: 100%;">
                      <p style="margin: 0 0 8px 0; font-size: 15px; font-weight: 600; color: #333333;">${task.title}</p>
                      <p style="margin: 0; font-size: 13px; color: #999999;">Assigned to: <span style="font-weight: 600; color: #666666;">You</span> • Due: ${task.due}</p>
                  </td>
                  <td style="text-align: right; vertical-align: top; white-space: nowrap; padding-left: 16px;">
                      <span style="display: inline-block; background-color: #fde8e8; color: #c54545; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600;">High</span>
                  </td>
              </tr>
          </table>
      </td>
    </tr>
  `;
}

export function sprintEndedEmailBuilder({
  name,
  email,
  sprint,
  task,
}: {
  name: string;
  email: string;
  sprint: {
    title: string;
    goals: string;
    duration: string;
    dueDate: string;
  };
  task: {
    total: number;
    completed: number;
    complete_rate: number;
  };
}) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sprint Completed - Monitora</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

                    <!-- Header with Logo -->
                    <tr>
                        <td style="padding: 24px 40px; background-color: #e8d4d4; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 8px;">
                                            <rect width="32" height="32" rx="4" fill="#5A2C2C"/>
                                            <path d="M9 8h14v2H9V8zm0 4h14v2H9v-2zm0 4h14v2H9v-2zm0 4h10v2H9v-2z" fill="#ffffff"/>
                                            <circle cx="22" cy="22" r="3" fill="#D4A574"/>
                                        </svg>
                                        <span style="font-size: 24px; font-weight: 700; color: #5A2C2C; vertical-align: middle;">Monitora</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Hero Illustration Banner -->
                    <tr>
                        <td style="padding: 0;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #5A2C2C 0%, #7D3C3C 100%); padding: 40px; text-align: center;">
                                        <!-- Illustration placeholder -->
                                        <div style="background-color: rgba(255,255,255,0.1); border-radius: 8px; padding: 60px 20px; min-height: 140px;">
                                            <p style="color: #ffffff; font-size: 14px; margin: 0; opacity: 0.8;">
                                              <img src="https://res.cloudinary.com/domingo-bucket/image/upload/v1761170523/monitora/9006f48f-7795-49d2-abc0-c49b248d227f.png" style="width: 100%; height: auto;" />
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Heading -->
                    <tr>
                        <td style="padding: 32px 40px 16px 40px; text-align: center;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #5A2C2C; line-height: 1.3;">Sprint Completed! 🎉</h1>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td style="padding: 16px 40px 16px 40px;">
                            <p style="margin: 0; font-size: 16px; color: #5A2C2C; font-weight: 600; line-height: 1.5;">Hi ${name},</p>
                        </td>
                    </tr>

                    <!-- Intro Text -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <p style="margin: 0; font-size: 15px; color: #666666; line-height: 1.6;">Congratulations! Your sprint has ended. Here's a summary of your accomplishments and key metrics from this sprint cycle.</p>
                        </td>
                    </tr>

                    <!-- Sprint Summary Card -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f3f3; border-radius: 8px; border: 1px solid #e8d4d4;">
                                <!-- Sprint Summary Header -->
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: left;">
                                                    <span style="font-size: 16px; font-weight: 600; color: #5A2C2C;">Sprint Summary</span>
                                                </td>
                                                <td style="text-align: right;">
                                                    <span style="display: inline-block; background-color: #d4f4dd; color: #2d7a4d; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 500;">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 4px;">
                                                            <circle cx="7" cy="7" r="6" stroke="#2d7a4d" stroke-width="2" fill="none"/>
                                                            <path d="M4 7l2 2 4-4" stroke="#2d7a4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Sprint Title -->
                                <tr>
                                    <td style="padding: 0 24px 12px 24px;">
                                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #333333;">${sprint.title}</h2>
                                    </td>
                                </tr>

                                <!-- Description -->
                                <tr>
                                    <td style="padding: 0 24px 24px 24px;">
                                        <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.6;">
                                          ${sprint.goals}
                                        </p>
                                    </td>
                                </tr>

                                <!-- Completion Rate Card -->
                                <tr>
                                    <td style="padding: 0 24px 24px 24px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                            <tr>
                                                <td style="padding: 24px; text-align: center;">
                                                    <h3 style="margin: 0 0 8px 0; font-size: 36px; font-weight: 700; color: #D4A574;">${task.complete_rate}</h3>
                                                    <p style="margin: 0 0 4px 0; font-size: 14px; color: #666666; font-weight: 500;">Completion Rate</p>
                                                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333333;">${task.completed} of ${task.total} tasks completed</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Sprint Stats Cards -->
                                <tr>
                                    <td style="padding: 0 24px 24px 24px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <!-- Duration Card -->
                                                <td style="width: 33%; padding-right: 8px;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                                        <tr>
                                                            <td style="padding: 16px; text-align: center;">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 8px;">
                                                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                                    <path d="M4 9h16M9 4v2M15 4v2" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                                </svg>
                                                                <p style="margin: 0; font-size: 12px; color: #999999; margin-bottom: 4px;">Duration</p>
                                                                <p style="margin: 0; font-size: 16px; font-weight: 700; color: #333333;">${sprint.duration}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>

                                                <!-- Tasks Card -->
                                                <td style="width: 33%; padding-right: 8px;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                                        <tr>
                                                            <td style="padding: 16px; text-align: center;">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 8px;">
                                                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                                    <path d="M8 8h8M8 12h8M8 16h5" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                                </svg>
                                                                <p style="margin: 0; font-size: 12px; color: #999999; margin-bottom: 4px;">Tasks</p>
                                                                <p style="margin: 0; font-size: 16px; font-weight: 700; color: #333333;">${task.total}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>

                                                <!-- Due Date Card -->
                                                <td style="width: 34%;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e8d4d4;">
                                                        <tr>
                                                            <td style="padding: 16px; text-align: center;">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 8px;">
                                                                    <circle cx="12" cy="12" r="8" stroke="#5A2C2C" stroke-width="2" fill="none"/>
                                                                    <path d="M12 7v5l3 3" stroke="#5A2C2C" stroke-width="2" stroke-linecap="round"/>
                                                                </svg>
                                                                <p style="margin: 0; font-size: 12px; color: #999999; margin-bottom: 4px;">Due Date</p>
                                                                <p style="margin: 0; font-size: 14px; font-weight: 700; color: #333333;">${sprint.dueDate}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Instructions Text -->
                    <tr>
                        <td style="padding: 0 40px 24px 40px;">
                            <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.6; text-align: center;">Click the link below to View the complete sprint report and detailed analytics.</p>
                        </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                                <tr>
                                    <td style="border-radius: 6px; background-color: #5A2C2C;">
                                        <a href="${process.env.APP_URL}" style="display: inline-block; padding: 14px 32px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none;">
                                            View Sprint Report →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Separator -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="border-top: 1px solid #e8d4d4;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Contact Text -->
                    <tr>
                        <td style="padding: 0 40px 16px 40px;">
                            <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.6;">Questions about the sprint results? Reach out to your project manager for a detailed information.</p>
                        </td>
                    </tr>

                    <!-- Sign Off -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <p style="margin: 0 0 4px 0; font-size: 14px; color: #666666;">Best regards,</p>
                            <p style="margin: 0; font-size: 14px; color: #333333; font-weight: 600;">The Monitora Team.</p>
                        </td>
                    </tr>

                    <!-- Help Section -->
                    <tr>
                        <td style="padding: 32px 40px; background-color: #f9f3f3; border-top: 1px solid #e8d4d4; text-align: center;">
                            <h4 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #5A2C2C;">Need Help Getting Started?</h4>
                            <p style="margin: 0 0 16px 0; font-size: 14px; color: #666666; line-height: 1.5;">Our support team is here to help you make the most of Monitora.</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 14px; color: #5A2C2C; text-decoration: none; font-weight: 500;">Help Center</a>
                                    </td>
                                    <td style="text-align: center; color: #cccccc; font-size: 14px;">•</td>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 14px; color: #5A2C2C; text-decoration: none; font-weight: 500;">Contact Support</a>
                                    </td>
                                    <td style="text-align: center; color: #cccccc; font-size: 14px;">•</td>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 14px; color: #5A2C2C; text-decoration: none; font-weight: 500;">Documentation</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 32px 40px; background-color: #e8d4d4; text-align: center;">
                            <p style="margin: 0 0 16px 0; font-size: 12px; color: #666666; line-height: 1.5;">This email was sent to ${email} because you were invited to join Monitora.</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                                <tr>
                                    <td style="text-align: center;">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 4px;">
                                            <circle cx="8" cy="8" r="7" stroke="#999999" stroke-width="1.5" fill="none"/>
                                            <path d="M8 4.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 6c-1.379 0-2.5-1.121-2.5-2.5S6.621 5.5 8 5.5s2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z" fill="#999999"/>
                                        </svg>
                                        <span style="font-size: 12px; color: #999999; vertical-align: middle;">2025 Monitora by DASH Technology Management. All Rights Reserved</span>
                                    </td>
                                </tr>
                            </table>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 12px; color: #666666; text-decoration: none;">Privacy Policy</a>
                                    </td>
                                    <td style="text-align: center; color: #cccccc; font-size: 12px;">•</td>
                                    <td style="text-align: center; padding: 0 8px;">
                                        <a href="#" style="font-size: 12px; color: #666666; text-decoration: none;">Terms of Service</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
}
