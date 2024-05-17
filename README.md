# Booking front-end

This is a demo app for consuming the Booking API. It features a list of booked reservations and a form for creating new ones.
It's built using `Next.js` and `Tailwind CSS` with `react-hook-form` for form handling and `@tanstack/query` for queries. It also uses `TypeScript` for type-safety. The tech stack is definitely an overkill for this simple app, however each piece of tech is very useful in production-grade apps.

## Running the application

To run the application first the image must be built with environment variable. To do that call the following command from the root of the project:

```
    docker build --build-arg NEXT_PUBLIC_API_URL={API_URL} -t {IMAGE_NAME} .
```

Where:

- `{API_URL}` - is the endpoint on which the API is set up. It probably will be `http://localhost:{SOME_PORT}/api`. The default, if not provided, is `http://localhost/api`
- `{IMAGE_NAME}` - can by any name

Then you run the container:

```
    docker run -p {PORT}:3000 {IMAGE_NAME}
```

Where:

- `{PORT}` - the port on which you want the app to run

## Improvements

There are ways to improve this solutions, which I know of, but omitted for simplicity's sake:

- Testing. At least some integration tests for each of the components/pages. I would use [`vitest`](https://vitest.dev/) for the test runner as it's a modern solution with a simple config. For components that communicate with the API I would use [`msw`](https://mswjs.io/) for mocking network traffic, because the best integration tests are the ones that mock only external systems and nothing more.
- Multiple languages/localization support. The labels and form validation errors should support multiple languages. And dates rendered should rendered in a localized format.
- Date pickers. Instead of using `<input type="date">` I would use some battle-tested library for a daterange picker. The UX as it is is not good, it would be much more pleasant to select both dates in one large calendar. Additionally the minimum for usability would be the display in the frontend of available vacancies for a given date. So a range including an unavailable date would not be selectable.
- Infite scroll instead of pagination would make much more sense for the style of reservation list that is implemented.
- Performance and error tracking. Similarily to backend, there should be a solution that captures errors and metrics. Sentry works great for this in my experience.
- CI. At the very least there should be a Github Action that runs tests, linter and type checker on merges to main and on open pull requests.
- Displaying error messages from the API. The error messages that user sees should be actionable for them, and error messages taken straight from the backend may not be that useful to them.
