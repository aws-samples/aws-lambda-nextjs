This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy on AWS

First, build the Next application in standalone mode (see `next.config.js`)

```bash
npm run build
```

Now, run `sam build` at the root of the project using the standalone manifest

```bash
sam build --manifest .next/standalone/package.json
```

Ideally we can use a Makefile to only copy the required deps to $ARTIFACTS_DIR and deploy static resources to S3.  Something like:

```bash
build-NextFunction:
	mkdir -p "$(ARTIFACTS_DIR)/node_modules"
	cp -r .next/standalone/node_modules/* "$(ARTIFACTS_DIR)/node_modules"
	cp .next/standalone/server.js "$(ARTIFACTS_DIR)"
	@echo "#!/bin/bash\n\nnode server.js" > "$(ARTIFACTS_DIR)/run.sh"
```

Deploy the application

```bash
sam deploy --guided
```

Deploy static resources to S3: (research other methods like including in sam build Makefile)

```bash
`aws s3 cp .next/static/ s3://next-bucket-2a7ee00c-e8d9/_next/static --recursive`
`aws s3 cp public/ s3://next-bucket-2a7ee00c-e8d9/public --recursive`
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
