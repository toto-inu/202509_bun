import { s3, write, S3Client } from "bun";

// [Todo] 環境変数の読み込み
const production = false

let metadata: Bun.S3File | string | null = null; 

if (production){
  const client = new S3Client({
    accessKeyId: "your-access-key",
    secretAccessKey: "your-secret-key",
    bucket: "my-bucket",
    // sessionToken: "..."
    // acl: "public-read",
    // endpoint: "https://s3.us-east-1.amazonaws.com",
    // endpoint: "https://<account-id>.r2.cloudflarestorage.com", // Cloudflare R2
    // endpoint: "https://<region>.digitaloceanspaces.com", // DigitalOcean Spaces
    // endpoint: "http://localhost:9000", // MinIO
  });
  metadata = s3.file("123.json");
} else {
  metadata = "filestorage/123.json";
  // Download 相当 → 読み込み
  let data: any = {};
  try {
    const file = Bun.file(metadata);
    data = await file.json();
  } catch (err) {
    // ファイルがない／読み込み失敗時のフォールバック
    data = {};
  }
  console.log("読み込んだデータ:", data);
}

// Upload 相当 → 書き込み
await write(metadata, JSON.stringify({ name: "Johnny", age: 30 }));

console.log("Upload completed!✨");

// Delete 相当 → ローカルファイル削除
// await Bun.file(filepath).delete();
