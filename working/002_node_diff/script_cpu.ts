function heavyComputation(n: number): number {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += Math.sqrt(i) * Math.sin(i) * Math.log(i + 1);
  }
  return s;
}

async function main() {
  const start = performance.now();

  // ウォームアップ（JIT 最適化を誘発）
  heavyComputation(100_000);

  const t0 = performance.now();
  const result = heavyComputation(5_000_000);
  const t1 = performance.now();

  console.log("result:", result);
  console.log("elapsed ms:", (t1 - t0).toFixed(2));
  console.log("startup + overhead ms:", (t0 - start).toFixed(2));

  // メモリ使用量ログ
  const mem = process.memoryUsage();
  console.log("memory MB:", (mem.heapUsed / 1024 / 1024).toFixed(2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
