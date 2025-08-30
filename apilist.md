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
- POST /request/send/interested/:id
- POST /request/send/ignored/:id
- POST /request/review/accepted/:requestid
- POST /request/review/rejected/:requestid

userRouter
- GET/ user/connections
- GET/ user/requests/recieved
- GET/ user/feeds - Gets you the profile of other user on platforms

(Status: interested,ignored,accepted,rejected)