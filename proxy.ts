import { NextResponse, type NextRequest } from "next/server";

/**
 * Τα ελληνικά ζουν στο «/» (rewrite προς «/el»), τα αγγλικά στο «/en».
 * Το «/el/...» ανακατευθύνεται στο καθαρό path ώστε να μην υπάρχει
 * διπλό περιεχόμενο στα μάτια των μηχανών αναζήτησης.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/el" || pathname.startsWith("/el/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/el${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Αφήνουμε απ' έξω τα internals του Next και ό,τι έχει κατάληξη αρχείου.
  matcher: ["/((?!_next/|.*\\.).*)"],
};
