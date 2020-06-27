import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth'
import { UserModel } from '../models'

// @ts-ignore
passport.use(new GoogleStrategy({
  consumerKey: process.env.GOOGLE_CONSUMER_KEY,
  consumerKeySecret: process.env.GOOGLE_CONSUMER_KEY_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, (token: any, tokenSecret: any, profile: any, done: any) => {
  // @ts-ignore
  UserModel.findOrCreate({google_id: profile.id}, (err: any, user: any) => {
    return done(err, user)
  })
}))