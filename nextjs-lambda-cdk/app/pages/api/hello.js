const handler = (req, res) => {
  res.status(200).json({
    text: 'Hello',
    region: process.env.AWS_REGION,
    runtime: process.env.AWS_EXECUTION_ENV,
    memory: process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE,
    timezone: process.env.TZ,
    date: Date(),
  })
}

export default handler;
