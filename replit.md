# Knight Bot - WhatsApp Pair Code Generator

## Overview
A WhatsApp device linking tool that generates pair codes and QR codes for connecting WhatsApp accounts. Built with Node.js and Express.

## Project Architecture
- **index.js** - Main Express server entry point (port 5000)
- **pair.js** - Pair code generation route using Baileys WhatsApp library
- **qr.js** - QR code generation route
- **pair.html** - Frontend UI (single page)
- **mega.js** - Mega.nz upload/download utility (unused placeholder)

## Key Dependencies
- Express (web server)
- @whiskeysockets/baileys (WhatsApp Web API)
- qrcode (QR code generation)
- awesome-phonenumber (phone number validation)

## How It Works
1. User enters their phone number with country code
2. Server connects to WhatsApp via Baileys and requests a pairing code
3. Code is displayed to the user to link their WhatsApp device
4. Alternatively, user can scan a QR code

## Running
```
node index.js
```
Server starts on port 5000, binding to 0.0.0.0.
