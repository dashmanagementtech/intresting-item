export default function welcomeEmailBuilder({
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
                      Thank you for joining Monitora! We're excited to help you streamline your project management and boost your team's productivity
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
