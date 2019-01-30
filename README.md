Next step is wiring up user controls for session and break values, and wiring 
stop button to reset timer to those values.

Basic Interface Description
- Title (Pomodoro Clock)
- Current Time (Default to 25:00, counts down) and controls
  - Controls 
    - Play - Start timer counting down
    - Pause - Pause timer without resetting it
    - Stop - Stop and reset timer to current time setting
    - Reset - Stop and reset timer to default (25/5) time setting
- Session Time (amount of work/session time a reset timer loads) and controls
  - Controls
    - Up/down, drop down, etc - Increase or decrease time
- Break Time (amount of break time a reset timer loads) and controls
  - Controls
    - Up/down, drop down, etc - Increase or decrease time
- (maybe link to wiki on Pomodoro clock somewhere discrete)
- Extra Feature: Per the Pomodoro method from Wikipedia, there should also be a check mark interface that runs up to 4 checks,
- increases break time (from 5 to 15-30 min) resets checks to 0, and returns to default break 5 min

Basic Experience
- Load page, which shows controls, current time, and session and break times.
- Defaults to 25:00 and 5:00, with timer ready on 25:00 (maybe link to wiki on
- Pomodoro clock somewhere discrete)
- User decides to either change settings or press play to begin
- Clock begins countdown. User can press pause, or stop, or reset
- Color changes (entire interface CSS color change) and/or beeps to indicate
- current state (session/break) and proximity to alert
- When timer gets to 00:00 for session time, break timer starts
- When timer gets to 00:00 for break time, session timer starts
- If Check Marks are used, each break adds a mark (dot, smiley, whatever) until 4
- are accrued
- At 4, break time is increased (to 15-30 min, could default to 0 but allow user
- to end break early, which needs a button or interface option to end break early)
- Marks reset to 0, and break resets to default 5 min
- Check Marks can also have fields next to them to allow entry of Tasks/Goals
- With Tasks/Goals, a tracking database could be added that reports on task
- completion, time spent, etc.
- Look at implementing: planning, tracking, recording, processing and
- visualizing

I'm tempted to suggest the inclusion of a settings box or additional buttons
- for:
- options:
- Infinite cycle: Default behavior of above
- Pause at 00:00: Requires hitting play button to continue into next state
- (session/play)
- Sound On/Off
- Sound options: Beeps, Chimes, or tunes
- Turn on Ticks (4 per sec) and Wind Up
- Turn on check marks

    h = (seconds/60/60)
    m = (seconds/60)-(h*60)
    s = (seconds - (h * 60 * 60) - (m*60))
    timeArr = [h.to_s,m.to_s,s.to_s]

    timeArr.map! { |value|
      if value.to_i < 10
        value = "0" + value
      else
        value
      end
    }

