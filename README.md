Created A Pull Request

Description:
This pull request introduces new redirection logic for the base URL. The implemented solution ensures consistent redirection behavior across both local development environments and the Vercel production deployment. The new logic is designed to handle all base URL redirection scenarios efficiently.

To achieve this, the new redirection logic utilizes the window.location.href property to accurately get the base URL. This property is a standard browser API that returns the complete URL of the current page. By using it, we can reliably capture the current URL and apply the redirection rules as intended.

I have tested this logic on Vercel and locally, and the redirection is working as expected in both environments.
