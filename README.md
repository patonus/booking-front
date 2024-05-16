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
