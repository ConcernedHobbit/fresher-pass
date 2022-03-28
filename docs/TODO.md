# TODO: features to implement

**Current goal**: Feature parity with fuksipassi.herokuapp.com

## Events
### Core
- [ ] Event can be deleted
- [ ] Event can be updated
- [ ] *(auth)* Event can only be created by Tutor+
- [ ] *(auth)* Event can only be modified by same or higher role
- [x] Event can be added with a name
  - [x] From API
  - [ ] From UI
- [x] An event can be viewed
  - [x] From API
  - [x] From UI
- [x] Events can be listed
  - [x] From API
  - [x] From UI
### Metadata
- [ ] Event can have description
- [ ] Event can have a time and date
- [ ] Event can have a place
### Interfacing
- [ ] Events from TKO-äly's calendar can be listed
- [ ] Events can be added based on TKO-äly's calendar event
- [ ] Events can be linked to TKO-äly calendar event
  - [ ] When linked, event syncs information from TKO-äly's calendar
### Attending
- [ ] User can mark event as attended
- [ ] *(auth)* Higher role can verify attendation

## Authentication
### Core
- [ ] User can sign up
- [ ] Sign up has to be accepted by Tutor+
- [ ] User can log in
- [ ] User has a role

## Points
### Core
- [ ] User can be awarded points
- [ ] *(auth)* Points can only be given to lower roles
- [ ] Pass can be doked