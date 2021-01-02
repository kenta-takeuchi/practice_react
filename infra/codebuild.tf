resource "aws_codebuild_project" "react-aws-codebuild" {
  name = "react-aws-codebuild"
  description = "react-aws-codebuild"
  build_timeout = "60"
  service_role = module.codebuild_role.iam_role_arn

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type = "BUILD_GENERAL1_SMALL"
    image = "aws/codebuild/standard:2.0"
    type = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
  }

  source {
    type = "CODEPIPELINE"
  }
}


data "aws_iam_policy_document" "codebuild" {
  statement {
    effect = "Allow"
    resources = ["*"]

    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:GetObjectVersion",
      "s3:GetBucketAcl",
      "s3:GetBucketLocation",
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
  }
}

module "codebuild_role" {
  source = "./iam_role"
  name = "codebuild"
  identifier = "codebuild.amazonaws.com"
  policy = data.aws_iam_policy_document.codebuild.json
}