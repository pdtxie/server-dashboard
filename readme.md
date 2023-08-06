<p align="center">
  <img alt="banner-dashboard2x" src="https://user-images.githubusercontent.com/65262710/235392473-a301b8ca-7f81-42fe-b1c0-c77900ecd8ec.png">

<h1 align="center">a simple server dashboard</h4>
</p>

this is a dashboard/portal for my home server

if you use this, you'll need to change out the icon!

<h2>INFO</h2>

- built with Svelte
- fonts used: quinta pro and space mono, subject to their respective copyright policies


<h2>SCREENSHOTS</h2>
<h3>LIGHT MODE (phone/desktop)</h3>

![light](https://github.com/pdtxie/server-dashboard/assets/65262710/603b0f5b-463d-445e-b247-f75e4628e1c5)



<h3>DARK MODE (OLED), mobile interface</h3>

![dark](https://github.com/pdtxie/server-dashboard/assets/65262710/f44a2004-0d7c-4953-a3c3-17ef710f800a)


<h2>FEATURES</h2>

- auto dark mode based on time
- responsive mobile/desktop ui design
- keybinds (based on the first char) to open apps
- time/date widget
- icon toggles light/dark mode
- pwa for ios
- fully configurable via json
- looks nice :)

<h3>EXAMPLE CONFIGURATION</h3>

```
{
    "boxes": [
        { "name": "Jellyfin", "colour": "181, 101, 118", "href": "http://192.168.1.2:8096" },
        
        { "name": "Router", "colour": "173, 99, 158", "href": "http://192.168.1.1" },
        { "name": "Switch", "colour": "140, 97, 168", "href": "http://192.168.1.3" },
        
        { "name": "PiHole", "colour": "101, 97, 168", "href": "http://192.168.1.2/admin" },
        { "name": "Home Assistant", "colour": "83, 135, 196", "href": "http://192.168.1.2:8123" }
    ]
}
```

###### inspired by [YunoHost's home page](https://yunohost.org/)
