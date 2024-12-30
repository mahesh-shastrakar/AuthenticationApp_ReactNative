# React Native Authentication App

A mobile authentication application built with React Native and TypeScript, featuring signup/login forms with validation.


## App Screenshots & Demo

### Login Screen
![Login Screen](assets/screenshots/login-screen.png)
- Clean login interface
- Email and password validation
- Remember Me checkbox
- Error messages display

### Sign Up Screen
![Sign Up Screen](assets/screenshots/signup-screen.png)
- Password strength indicator
- Real-time validation
- Matching password verification

### App Flow Demo
![App Demo](assets/gifs/app-flow.gif)
- Complete authentication flow
- Form validation in action
- Screen transitions
- Error handling demonstration



## Setup & Installation

1. Prerequisites:
```bash
node >= 14.0.0
npm >= 6.0.0
react-native-cli
```

2. Install dependencies:
```bash
npm install
```

3. iOS setup:
```bash
cd ios
pod install
cd ..
```

4. Start the app:
```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Design Choices

### Architecture
- TypeScript for type safety and better development experience
- Formik for form management
- Yup for validation schemas
- React Navigation for routing
- Async Storage for persistent data

### UI/UX
- Clean, minimalist interface
- Form validation with immediate feedback
- Password strength indicator
- Remember Me functionality
- Accessibility support with ARIA labels

### Security
- Password validation rules
- Secure text entry for passwords
- Email format validation
- Session management

## Limitations & Assumptions

### Limitations
- Basic authentication flow (no backend integration)
- Local storage only for Remember Me feature
- Limited offline functionality
- No biometric authentication
- No password recovery flow

### Assumptions
- Users have basic understanding of authentication flows
- Single device usage per user
- English language interface
- Internet connectivity for future backend integration

## Future Improvements
- Backend integration
- Social auth
- Biometric authentication
- Multi-language support
- Password recovery
- Enhanced security measures