import { createHash } from "crypto";

/** 비밀번호와 메시지가 더 이상 클라이언트 번들에 노출되지 않는다.
 *  비밀번호 변경: 아래 해시를 sha256(새 비밀번호)로 교체.
 *  node -e "console.log(require('crypto').createHash('sha256').update('0507').digest('hex'))" */
const PASS_HASH =
  "5b697282df7a44230864437a0821d72986f8406b769c9a1797bad56e269ffb7a"; // placeholder — 아래에서 실제 해시로 교체됨

const SECRET_MESSAGE = `"LCK 2위 축하합니다! 그래도 저한테는 언제나 4위예요.

우리 엄마 사위. "`;

export async function POST(req: Request) {
  const { pass } = (await req.json().catch(() => ({}))) as { pass?: string };
  if (typeof pass !== "string") {
    return Response.json({ ok: false }, { status: 400 });
  }
  const hash = createHash("sha256").update(pass).digest("hex");
  if (hash === PASS_HASH) {
    return Response.json({ ok: true, message: SECRET_MESSAGE, signedBy: "— Logged by Yu-Hyun —" });
  }
  return Response.json({ ok: false });
}
