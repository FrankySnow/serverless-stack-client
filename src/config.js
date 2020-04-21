export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-3",
    BUCKET: "frankysnow1",
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://xeurmhh7ta.execute-api.eu-central-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_SyEkmzeu9",
    APP_CLIENT_ID: "5hgle1f1shvn1p9073a4q7jhsh",
    IDENTITY_POOL_ID: "eu-central-1:f6fea2c8-8632-42e7-8924-b242af6a6194",
  },
}
