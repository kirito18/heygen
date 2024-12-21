<<<<<<< HEAD
# HeyGen Interactive Avatar NextJS Demo

![HeyGen Interactive Avatar NextJS Demo Screenshot](./public/demo.png)

This is a sample project and was bootstrapped using [NextJS](https://nextjs.org/).
Feel free to play around with the existing code and please leave any feedback for the SDK [here](https://github.com/HeyGen-Official/StreamingAvatarSDK/discussions).

## Getting Started FAQ

### Setting up the demo

1. Clone this repo

2. Navigate to the repo folder in your terminal

3. Run `npm install` (assuming you have npm installed. If not, please follow these instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)

4. Enter your HeyGen Enterprise API Token or Trial Token in the `.env` file. Replace `HEYGEN_API_KEY` with your API key. This will allow the Client app to generate secure Access Tokens with which to create interactive sessions.

   You can retrieve either the API Key or Trial Token by logging in to HeyGen and navigating to this page in your settings: [https://app.heygen.com/settings?nav=API]. NOTE: use the trial token if you don't have an enterprise API token yet.

5. (Optional) If you would like to use the OpenAI features, enter your OpenAI Api Key in the `.env` file.

6. Run `npm run dev`

### Difference between Trial Token and Enterprise API Token

The HeyGen Trial Token is available to all users, not just Enterprise users, and allows for testing of the Interactive Avatar API, as well as other HeyGen API endpoints.

Each Trial Token is limited to 3 concurrent interactive sessions. However, every interactive session you create with the Trial Token is free of charge, no matter how many tasks are sent to the avatar. Please note that interactive sessions will automatically close after 10 minutes of no tasks sent.

If you do not 'close' the interactive sessions and try to open more than 3, you will encounter errors including stuttering and freezing of the Interactive Avatar. Please endeavor to only have 3 sessions open at any time while you are testing the Interactive Avatar API with your Trial Token.

### Starting sessions

NOTE: Make sure you have enter your token into the `.env` file and run `npm run dev`.

To start your 'session' with a Interactive Avatar, first click the 'start' button. If your HeyGen API key is entered into the Server's .env file, then you should see our demo Interactive Avatar (Monica!) appear.

After you see Monica appear on the screen, you can enter text into the input labeled 'Repeat', and then hit Enter. The Interactive Avatar will say the text you enter.

If you want to see a different Avatar or try a different voice, you can close the session and enter the IDs and then 'start' the session again. Please see below for information on where to retrieve different Avatar and voice IDs that you can use.

### Connecting to OpenAI

A common use case for a Interactive Avatar is to use it as the 'face' of an LLM that users can interact with. In this demo we have included functionality to showcase this by both accepting user input via voice (using OpenAI's Whisper library) and also sending that input to an OpenAI LLM model (using their Chat Completions endpoint).

Both of these features of this demo require an OpenAI API Key. If you do not have a paid OpenAI account, you can learn more on their website: [https://openai.com/index/openai-api/]

Without an OpenAI API Key, this functionality will not work, and the Interactive Avatar will only be able to repeat text input that you provide, and not demonstrate being the 'face' of an LLM. Regardless, this demo is meant to demonstrate what kinds of apps and experiences you can build with our Interactive Avatar SDK, so you can code your own connection to a different LLM if you so choose.

To add your Open AI API Key, fill copy it to the `OPENAI_API_KEY` and `NEXT_PUBLIC_OPENAI_API_KEY` variables in the `.env` file.

### How does the integration with OpenAI / ChatGPT work?

In this demo, we are calling the Chat Completions API from OpenAI in order to come up with some response to user input. You can see the relevant code in components/InteractiveAvatar.tsx.

In the initialMessages parameter, you can replace the content of the 'system' message with whatever 'knowledge base' or context that you would like the GPT-4o model to reply to the user's input with.

You can explore this API and the different parameters and models available here: [https://platform.openai.com/docs/guides/text-generation/chat-completions-api]

### Which Avatars can I use with this project?

By default, there are several Public Avatars that can be used in Interactive Avatar. (AKA Interactive Avatars.) You can find the Avatar IDs for these Public Avatars by navigating to [app.heygen.com/interactive-avatar](https://app.heygen.com/interactive-avatar) and clicking 'Select Avatar' and copying the avatar id.

In order to use a private Avatar created under your own account in Interactive Avatar, it must be upgraded to be a Interactive Avatar. Only 1. Finetune Instant Avatars and 2. Studio Avatars are able to be upgraded to Interactive Avatars. This upgrade is a one-time fee and can be purchased by navigating to [app.heygen.com/interactive-avatar] and clicking 'Select Avatar'.

Please note that Photo Avatars are not compatible with Interactive Avatar and cannot be used.

### Where can I read more about enterprise-level usage of the Interactive Avatar API?

Please read our Interactive Avatar 101 article for more information on pricing and how to increase your concurrent session limit: https://help.heygen.com/en/articles/9182113-interactive-avatar-101-your-ultimate-guide
=======
## Interactive-Avatar

## Changes 2.0
1. Added support for voice chat.

## Changes 2.0.0-beta.1
1. Added more API events.
2. Smoother video experience.
3. Added control for avatar listening state.

## Changes 1.0.15
1. The API now returns `duration_ms` in the `avatar_stop_talking` event

## Changes 1.0.14
1. The API now supports a knowledge base parameter in the createStreamingAvatar function
2. The API now supports chat mode in the speak function
3. The API now supports rate and emotion (only some voices support emotion) in the voice settings in the createStreamingAvatar function

## Changes 1.0.13
1. The API now sets default jitter bufffer target to 200ms

## Changes 1.0.11

1. The API now supports interrupt current streaming

## Changes 1.0.9

1. The API now supports start/stop event callbacks
2. The API now supports setting jitter buffer target (https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)

## Introduction

This SDK provides a convenient way for developers to better interface with HeyGen's Interactive Avatar. 

## Installation 

```
npm install @heygen/streaming-avatar
```

To build and compile the typescript sources to javascript run install then:
```
npm run build
```

## Implementation

For demo of this SDK and how it is used when installed in an app, please refer to the following: https://github.com/HeyGen-Official/InteractiveAvatarNextJSDemo. 

```JS
import StreamingAvatar, { AvatarQuality, StreamingEvents } from '@heygen/streaming-avatar';

let streamingAvatar;
async function startChatCreation(){
    streamingAvatar = new StreamingAvatar({token: 'ENTER_ACCESS_TOKEN_HERE'});

    // some events
    streamingAvatar.on(StreamingEvents.AVATAR_START_TALKING, (e) => {});
    streamingAvatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {});
    streamingAvatar.on(StreamingEvents.STREAM_READY, (event) => {});

    const sessionInfo = await streamingAvatar.createStartAvatar({
        quality: AvatarQuality.Low,
        avatarName: avatarId,
        knowledgeId: knowledgeId, // from labs.heygen.com
        // knowledgeBase: knowledgeBase, // your customized prompt content
        voice: {
          voiceId: voiceId,
          rate: 1.5, // 0.5 ~ 1.5
          emotion: VoiceEmotion.EXCITED,
        },
        language: language,
        // disableIdleTimeout: false, // Default is false; enable cautiously.
    });
    
    // switch to voice chat. in this mode, we will record your voice and keep chatting with avatar in real time.
    await streamingAvatar.startVoiceChat({
      useSilencePrompt: true, // the default is false. true means you will receive silence prompts.
    });
}

// In text mode, please use the speak method (Default TALK type).
streamingAvatar.speak({ text: text, task_type: TaskType.REPEAT, taskMode: TaskMode.SYNC });

// Please note, you can use the speak method in voice chat, but only the TALK type is supported in voice chat mode.
streamingAvatar.speak({ text: text })

// close voice chat, will stop recording your voice.
streamingAvatar.closeVoiceChat();

// close the session
streamingAvatar.stopAvatar();

// interrupt the avatar's talking
streamingAvatar.interrupt();

// it's helpful in text mode. `startListening` will let the avatar switch to listening state.
streamingAvatar.startListening();
streamingAvatar.stopListening();
```

## Troubleshooting FAQ

### How do I get an Access token Key?

To generate your access token you must first have access to your API key. API Keys are reserved for Enterprise customers. You can retrieve either the API Key or Trial Token by logging in to HeyGen and navigating to this page in your settings: https://app.heygen.com/settings?nav=API. Afterwards you can run the following to obtain your access token.

Please note the tokens are one time use.

```
curl -X POST https://api.heygen.com/v1/streaming.create_token -H "x-api-key: <api-key>"
```

### Which Avatars can I use with this project?

By default, there are several Public Interactive Avatars that can be used. You can find the Avatar IDs for these Avatars by navigating to labs.heygen.com/interactive-avatar and clicking 'Select Avatar'.

You can create your own Interactive Avatar to use with this API by visiting labs.heygen.com/interactive-avatar and clicking 'Create Interactive Avatar' at the bottom of the screen.

### Why am I encountering issues with testing?

Most likely, you are hitting your concurrent session limit. While testing this API with your Trial Token, only 3 concurrent sessions can be created. Please endeavor to close unused sessions with the Close Session endpoint when they are no longer being used; they will automatically close after some minutes.

You can check how many active sessions you have open with the List Sessions endpoint: https://docs.heygen.com/reference/list-sessions
>>>>>>> 5f267ca8b4eb4c113036fa4778ed5ff7adc52e06
