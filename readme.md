<p align="center">
  <img alt="banner-dashboard2x" src="https://user-images.githubusercontent.com/65262710/235392473-a301b8ca-7f81-42fe-b1c0-c77900ecd8ec.png">

<h1 align="center">a (home) server dashboard</h4>
</p>

## Info
- built with Svelte
- fonts used: quinta pro and space mono, **subject to their respective copyright policies**
 
**Demo:** you can view an interactive demo of this portal [here](https://demos.tim-xie.com/server-dashboard)

**Note:** this is a dashboard/portal for my personal server, so if you use this, you'll need to change out the icon!


## Screenshots
### LIGHT MODE
![light](https://github.com/pdtxie/server-dashboard/assets/65262710/603b0f5b-463d-445e-b247-f75e4628e1c5)

### DARK MODE & MOBILE
![dark](https://github.com/pdtxie/server-dashboard/assets/65262710/f44a2004-0d7c-4953-a3c3-17ef710f800a)

## Features
- auto dark mode based on time
- responsive mobile/desktop ui design
- keybinds (based on the first char) to open apps
- time/date widget
- icon toggles light/dark mode
- pwa for ios
- fully configurable via json
- looks nice :)

## Example Config
```json
{
    "boxes": [
        { "name": "Jellyfin", "colour": "181, 101, 118", "href": "http://192.168.1.2:8096" },
        
        { "name": "Router", "colour": "173, 99, 158", "href": "http://192.168.1.1" },
        { "name": "Switch", "colour": "140, 97, 168", "href": "http://192.168.1.3" },
        
        { "name": "PiHole", "colour": "101, 97, 168", "href": "http://192.168.1.2/admin" },
        { "name": "Home Assistant", "colour": "83, 135, 196", "href": "http://192.168.1.2:8123" }
    ],
    "colours": [
        "232, 209, 142",
        "233, 190, 140",
        "234, 172, 139",
        "231, 139, 125",
        "229, 107, 111",
        "205, 104, 114",
    ]
}
```
(note you can have more colours than boxes)

##### inspired by [YunoHost's home page](https://yunohost.org/)
