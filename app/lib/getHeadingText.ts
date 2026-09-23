export function getHeadingText(children: any[]): string {
  return children?.map((c: any) => c.text).join("") || "";
}