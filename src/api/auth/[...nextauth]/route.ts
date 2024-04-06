import config from "@/config/config";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: config.googleId,
      clientSecret: config.googleClientSecret,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
    } catch (error) {}
  },
});

export { handler as GET, handler as POST };
