resource "aws_s3_bucket" "react-app" {
  bucket = var.bucket_name
  acl = "public-read"
  force_destroy = true

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "s3_bucket_policy" {
  bucket = aws_s3_bucket.react-app.id
  policy = data.aws_iam_policy_document.react-app.json
}

data "aws_iam_policy_document" "react-app" {
  statement {
    effect = "Allow"
    sid = "PublicReadGetObject"
    actions = [
      "s3:GetObject",
      "s3:PutObject"]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.react-app.id}/*"]

    principals {
      type = "AWS"
      identifiers = [
        "582318560864"]
    }
  }
}