#devtinder API

authRouter
- POST /signup
- POST /login
- POST /logout

profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

connectionRequestRouter
- POST /request/send/status/:id
  (status- interested / ignored)

- POST /request/review/status/:requestid
  (status- accepted/rejected)

userRouter
- GET/ user/connections
- GET/ user/requests/recieved
- GET/ user/feeds - Gets you the profile of other user on platforms

(Status: interested,ignored,accepted,rejected)





-Pagination
NOTES:

/feed?page=1&limit=10 => 1-10 => .skip(0) & .limit(10)
/feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)
/feed?page=3&limit=10 => 21-30 => .skip(20) & .limit(10)
/feed?page=4&limit=10 => 21-30 => .skip(20) & .limit(10)
skip = (page-1)*limit;