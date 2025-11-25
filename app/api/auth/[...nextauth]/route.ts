import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials;

        const users = [
          { email: "nakib@gmail.com", password: "nakib", role: "admin" },
        ];

        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (!user) return null;
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
