---
layout: ../../layouts/Layout.astro
title: setting up a radio in costa rica
pubDate: 2026-06-15
description: helping a friend with broadcasting with an rpi
---

My friend [Bailey](https://substack.com/@bailey), a good person™️, started a radio community in Nosara, Costa Rica. We got it connected so anyone can stream to it from anywhere.

Bailey first mentioned this radio idea to me over some rockaway waves years ago. My friends and i just started building an [internet radio service](https://evenings.fm/) so the idea was close to my heart.

Fast forward an indistinguishable number of years, Bailey fully adopted this project down in her surf town in Costa Rica. I offered to help however I could because oh man I love this project so much.

<img src="/images/bailey.jpg" alt="bailey" width="300" class="db center mx-auto ba mt4" />

<div class="db tc mt2 i f6 mb4 o-50">bailey in the mix</div>

We traded notes for a bit. Bailey purchased a hobbyist transmitter and antenna and was already spinning sweet tunes on the radio waves. Nosara Pirate Radio was born!

This past month I got the opportunity to visit to check it out and just help however I could be useful.

First thing we did, we climbed on the roof to remount the antenna somewhere higher up. We weren't happy with the range so we were hoping the higher location gives us a better reception.

<img src="/images/antenna.jpg" alt="antenna" width="300" class="db center mx-auto ba mt4" />

<img src="/images/antenna-2.jpg" alt="antenna" width="300" class="db center mx-auto ba mt4" />

<div class="db tc mt2 i f6 mb4 o-50">antenna new mounting point</div>

To help more folks tune in, we connected the station to the internet through the previously mentioned service. We ended up using the internet station as the source of truth.

Residents could stream into the internet service using a stream tool like OBS then we would rebroadcast it out live to the radio. This was a pretty smooth laptop-to-mixer-to-laptop-through-OBS-to-internet-to-transmitter process. 

<img src="/images/bailey-niko.jpg" alt="antenna" width="300" class="db center mx-auto ba mt4" />

For the most part this was working great. However, it required a lot of babysitting the station. If we needed to step out for whatever reason the transmission needed a computer to be attached. Bailey volunteered an older laptop for this duty but I offered a raspberry pi solution.

I spent the rest of my time there hacking on a rpi bridge that would pull audio from the internet service and then output it to the audio lines into in the transmitter.

<img src="/images/rpi.jpg" alt="raspberry pi" width="300" class="db center mx-auto ba mt4" />

<div class="db tc mt2 i f6 mb4 o-50">the rpi doing its thing</div>

This was the most ~fun~ technical part of the buildout. I spun up a application on the raspberry pi for admin control, then pointed a Cloudflare Tunnel at it so we could access it outside the local network and then added Tailscale and a healthy dose of system process management for devops-ability.

So now the setup is a sweet laptop->internet->rpi->transmitter process. The transmitter is now fully bridged to the internet. Which means Bailey and any radio guests can control the radio transmitter remotely from anywhere in the world.

<video src="/images/npr.mov" width="300" class="db center mx-auto ba mt4" controls playsinline>
  Your browser does not support the video tag.
</video>

Every day this community floods the whatsapp group with recommendations and reactions to the radio and it makes me thrilled to have a small hand in it.

If you find yourself in Playa Guiones, Costa Rica, you can tune in at 87.7 fm. If you're not, you can listen at [nosararadio.com](https://nosararadio.com/).

NPR forever <3
