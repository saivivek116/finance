const name = {
  firstname: 'saivivek',
};

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn();
  }
  // console.log(authObj);
});
