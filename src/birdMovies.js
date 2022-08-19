const birdMovies = [
  {img: 'movieA', uri: 'https://birdvideos.s3.amazonaws.com/Screen+Recording+2022-07-07+at+8.30.54+AM.mp4', dt_m: "2022-07-07 08:31:18.993688"},
  {img: 'movie1', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-10 at 8.57.39 AM.mp4', dt_m: "2022-07-10 08:57:48.664909"},
  {img: 'movie2', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-10 at 11.12.37 AM.mp4', dt_m: "2022-07-10 11:12:51.545195"},
  {img: 'movie3', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-10 at 11.14.17 AM.mp4', dt_m: "2022-07-10 11:14:29.166671"},
  {img: 'movie4', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.29.32 PM.mp4', dt_m: "2022-07-21 16:29:48"},
  {img: 'movie5', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.35.17 PM.mp4', dt_m: "2022-07-21 16:35:27"},
  {img: 'movie6', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.36.16 PM.mp4', dt_m: "2022-07-21 16:36:56"},
  {img: 'movie7', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.50.14 PM.mp4', dt_m: "2022-07-21 16:50:42"},
  {img: 'movie8', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.51.06 PM.mp4', dt_m: "2022-07-21 16:51:37"},
  {img: 'movie9', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.52.12 PM.mp4', dt_m: "2022-07-21 16:52:35"},
  {img: 'movie10', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 4.52.44 PM.mp4', dt_m: "2022-07-21 16:53:22"},
  {img: 'movie11', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 5.03.00 PM.mp4', dt_m: "2022-07-21 17:03:56.685726"},
  {img: 'movie12', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 5.18.30 PM.mp4', dt_m: "2022-07-21 17:18:52.305887"},
  {img: 'movie13', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 5.40.55 PM.mp4', dt_m: "2022-07-21 17:41:13.345978"},
  {img: 'movie14', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 5.50.50 PM.mp4', dt_m: "2022-07-21 17:51:03.765574"},
  {img: 'movie15', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 5.56.41 PM.mp4', dt_m: "2022-07-21 17:56:57.277277"},
  {img: 'movie16', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 5.57.07 PM.mp4', dt_m: "2022-07-21 17:57:42.804182"},
  {img: 'movie17', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 6.55.33 PM.mp4', dt_m: "2022-07-21 18:55:53.623754"},
  {img: 'movie18', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 6.58.42 PM.mp4', dt_m: "2022-07-21 18:58:52.814968"},
  {img: 'movie19', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 6.58.59 PM.mp4', dt_m: "2022-07-21 18:59:54.805755"},
  {img: 'movie20', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 7.00.15 PM.mp4', dt_m: "2022-07-21 19:00:43.306906"},
  {img: 'movie21', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 7.08.24 PM.mp4', dt_m: "2022-07-21 19:08:39.898217"},
  {img: 'movie22', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-21 at 7.15.34 PM.mp4', dt_m: "2022-07-21 19:15:57.959188"},
  {img: 'movie23', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 7.51.15 AM.mp4', dt_m: "2022-07-22 07:51:36.854795"},
  {img: 'movie24', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 11.40.12 AM.mp4', dt_m: "2022-07-22 11:41:15.190946"},
  {img: 'movie25', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 11.52.12 AM.mp4', dt_m: "2022-07-22 11:52:32.666332"},
  {img: 'movie26', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 1.52.38 PM.mp4', dt_m: "2022-07-22 13:53:08.226527"},
  {img: 'movie27', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 3.13.01 PM.mp4', dt_m: "2022-07-22 15:14:15.181998"},
  {img: 'movie28', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 3.14.30 PM.mp4', dt_m: "2022-07-22 15:15:22.245645"},
  {img: 'movie29', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 3.17.00 PM.mp4', dt_m: "2022-07-22 15:19:34.364022"},
  {img: 'movie30', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 3.19.37 PM.mp4', dt_m: "2022-07-22 15:20:19.931630"},
  {img: 'movie31', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 3.26.25 PM.mp4', dt_m: "2022-07-22 15:26:54.536764"},
  {img: 'movie32', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 5.52.35 PM.mp4', dt_m: "2022-07-22 17:52:55.077055"},
  {img: 'movie33', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-22 at 6.02.27 PM.mp4', dt_m: "2022-07-22 18:02:46.185875"},
  {img: 'movie34', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-23 at 9.03.18 AM.mp4', dt_m: "2022-07-23 09:03:37.626023"},
  {img: 'movie35', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-23 at 9.04.12 AM.mp4', dt_m: "2022-07-23 09:04:36.660473"},
  {img: 'movie36', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-23 at 8.23.22 PM.mp4', dt_m: "2022-07-23 20:23:31.313530"},
  {img: 'movie37', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-24 at 10.46.09 AM.mp4', dt_m: "2022-07-24 10:47:08.583783"},
  {img: 'movie38', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-24 at 10.47.18 AM.mp4', dt_m: "2022-07-24 10:48:15.172855"},
  {img: 'movie39', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-24 at 12.06.44 PM.mp4', dt_m: "2022-07-24 12:07:40.884849"},
  {img: 'movie40', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-24 at 2.59.03 PM.mp4', dt_m: "2022-07-24 14:59:37.431643"},
  {img: 'movie41', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-25 at 8.04.39 AM.mp4', dt_m: "2022-07-25 08:04:50.760259"},
  {img: 'movie42', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-26 at 7.51.04 AM.mp4', dt_m: "2022-07-26 07:51:25.626624"},
  {img: 'movie43', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-26 at 11.22.15 AM.mp4', dt_m: "2022-07-26 11:22:27.453590"},
  {img: 'movie44', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-26 at 11.49.15 AM.mp4', dt_m: "2022-07-26 11:49:53.416875"},
  {img: 'movie45', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 8.36.23 AM.mp4', dt_m: "2022-07-27 08:36:40.584486"},
  {img: 'movie46', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 8.39.53 AM.mp4', dt_m: "2022-07-27 08:40:02.380600"},
  {img: 'movie47', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 11.54.53 AM.mp4', dt_m: "2022-07-27 11:55:11.642689"},
  {img: 'movie48', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 1.41.27 PM.mp4', dt_m: "2022-07-27 13:41:37.361618"},
  {img: 'movie49', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 1.43.52 PM.mp4', dt_m: "2022-07-27 13:44:24.052159"},
  {img: 'movie50', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 1.44.31 PM.mp4', dt_m: "2022-07-27 13:45:05.627754"},
  {img: 'movie51', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 1.51.11 PM.mp4', dt_m: "2022-07-27 13:51:36.703540"},
  {img: 'movie52', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 2.32.34 PM.mp4', dt_m: "2022-07-27 14:32:50.616216"},
  {img: 'movie53', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-27 at 3.25.55 PM.mp4', dt_m: "2022-07-27 15:26:05.500001"},
  {img: 'movie54', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 10.44.11 AM.mp4', dt_m: "2022-07-28 10:44:23.727972"},
  {img: 'movie55', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 10.45.44 AM.mp4', dt_m: "2022-07-28 10:45:52.168401"},
  {img: 'movie56', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 10.46.10 AM.mp4', dt_m: "2022-07-28 10:46:32.871369"},
  {img: 'movie57', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 11.17.08 AM.mp4', dt_m: "2022-07-28 11:17:53.360484"},
  {img: 'movie58', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 11.22.24 AM.mp4', dt_m: "2022-07-28 11:22:48.639260"},
  {img: 'movie59', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 11.40.51 AM.mp4', dt_m: "2022-07-28 11:41:05.570316"},
  {img: 'movie60', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 12.02.06 PM.mp4', dt_m: "2022-07-28 12:02:20.212337"},
  {img: 'movie61', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-28 at 3.40.52 PM.mp4', dt_m: "2022-07-28 15:41:08.500392"},
  {img: 'movie62', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-29 at 8.03.28 AM.mp4', dt_m: "2022-07-29 08:03:35.360114"},
  {img: 'movie63', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-29 at 11.02.03 PM.mp4', dt_m: "2022-07-29 23:02:21.596574"},
  {img: 'movie64', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-30 at 9.58.48 AM.mp4', dt_m: "2022-07-30 09:58:56.178836"},
  {img: 'movie65', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-30 at 9.59.40 AM.mp4', dt_m: "2022-07-30 10:00:13.182203"},
  {img: 'movie66', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-30 at 9.32.44 PM.mp4', dt_m: "2022-07-30 21:32:53.127575"},
  {img: 'movie67', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-30 at 10.31.00 PM.mp4', dt_m: "2022-07-30 22:31:08.553874"},
  {img: 'movie68', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-07-31 at 8.05.58 AM.mp4', dt_m: "2022-07-31 08:06:08.752641"},
  {img: 'movie69', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-08-07 at 9.33.46 PM.mp4', dt_m: "2022-08-07 21:36:12.894193"},
  {img: 'movie70', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-08-07 at 9.36.26 PM.mp4', dt_m: "2022-08-07 21:38:07.004841"},
  {img: 'movie71', uri: 'https://birdvideos.s3.amazonaws.com/Screen Recording 2022-08-07 at 9.38.37 PM.mp4', dt_m: "2022-08-07 21:38:49.804417"},
];

export default birdMovies;
