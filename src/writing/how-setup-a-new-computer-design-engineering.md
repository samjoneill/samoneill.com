---
title: How I set up a new computer for design engineering
metaTitle: How I set up a new computer for design engineering | Writing
date: 2024-11-15
---

I just got a new computer – an M4 Mac mini. It replaces an eight year old MacBook Air as my personal machine. Quite the upgrade.

When it comes to setting up a new computer, I always choose to pass on Apple's automated migration tools and set things up myself. I've never liked the idea of cluttering up a brand new device with years worth of cruft from an old machine.

That being said, there are some things I do as a matter of habit when getting a new computer.

## Homebrew

The absolute first thing I do on any new computer is install [Homebrew](https://brew.sh/). I use this to install and manage applications and command line tools.

I do this for a number of reasons, but mainly because it allows you to bypass the cumbersome click-through-a-wizard, drag-and-drop, and eject-the-disk dance that macOS otherwise forces you through every time you install an app. It’s well worth looking into if you’re comfortable working with the command line.

At the time of writing, you install Homebrew by running the following command in the terminal, and following the instructions:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The install script for Homebrew has the added benefit of installing Command Line Tools, which brings with it Git. Handy.

## 1Password

For the steps that follow, I’ll need my logins to hand. To get at them I need to install [1Password](https://1password.com/), which I can do with a simple terminal command courtesy of Homebrew.

```sh
brew install --cask 1password
brew install --cask 1password-cli
```

The `--cask` flag here indicates the installation of an application. You’ll see it repeated a bunch below.

If you’re not using a password manager, you really should be. While I use 1Password, there are many alternatives available. Most operating systems include one these days, so you really have no excuse.

After installing, sign in to 1Password and connect the 1Password CLI with the 1Password app by [following these instructions](https://developer.1password.com/docs/cli/about-biometric-unlock/).

## Browser

Once I’ve got my logins to hand, I’ll install my browser of choice: [Firefox Developer Edition](https://www.mozilla.org/en-GB/firefox/developer/).

```sh
brew install --cask firefox-developer-edition
```

Which I’ll then open and sign in to, so all of my extensions and bookmarks are downloaded.

At this point, I’ll also sign into GitHub as that'll be necessary for the next step.

## A better terminal

A little like how many people open the default browser once when getting a new computer - to install a browser they prefer - and then never use it again, my next task to use Terminal to install it’s replacement. I prefer [iTerm 2](https://iterm2.com/).

```sh
brew install --cask iterm2
```

I’ll also install my (current) favourite monospaced font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

```sh
brew install --cask font-jetbrains-mono
```

Once it’s installed, I open it and do three things:

1. Enable a theme: Settings > Appearance > General > Theme > Select “Minimal”
2. Stop stretchy tabs: Settings > Appearance > Tabs > Uncheck “Stretch tabs to fill bar”
3. Install my profile by importing a JSON file that I store in a GitHub Gist.

My profile takes care of a number of things, mostly to do with the appearance of windows: size, colour and typography. The latter being why we installed JetBrains Mono before applying the profile, else that change wouldn’t take effect.

## SSH key

I’ll need an SSH key for authentication, so let’s get one set up.

1. Generate a new SSH key; and add it to the ssh-agent ([documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))
2. Add the new SSH key to your GitHub account ([documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account))

## Development environment

I use [Laravel Valet](https://laravel.com/docs/11.x/valet) a lot for local development.

To get this set up, first install [Composer](https://getcomposer.org/).

```sh
brew install composer
```

Next, run these commands in your terminal to install Valet.

```sh
brew update
brew install php
composer global require laravel/valet
valet install
```

Those steps install Valet on your machine. Now we need to conduct a few more steps to complete some basic configuration.

I've selected `Sites` as the name of my working directory here, but you call it whatever you'd like.

```sh
mkdir ~/Sites
cd ~/Sites
valet park
```

I also want a way of running a background instance of MySQL. I do this using [DBngin](https://dbngin.com/).

```sh
brew install --cask dbngin
```

And to manage those databases, I use [Sequel Ace](https://sequel-ace.com/).

```sh
brew install --cask sequel-ace
```

I'm also going to need [Node](https://nodejs.org/en).

```sh
brew install node
```

## Development applications

That's the local environment set up. Now let’s install the applications we need to write some code.

I use [Visual Studio Code](https://code.visualstudio.com/) as my IDE. I do feel nostaglic towards the days when I used Sublime Text, but VS Code is frankly a better fit for my use case these days.

At this point, I've got a pretty nicely fine-tuned setup in VS Code. My settings and extensions are all synced to my GitHub account, and are automatically applied when signing in.

Perhaps at some point, I'll go into how I've set up VS Code to make life easier and my code more consistent. For now let's just get it installed.

```sh
brew install visual-studio-code
```

I've used [Tower](https://www.git-tower.com/mac) as my Git client for my whole career, and couldn't be without it.

```sh
brew install tower
```

## Other applications

These applications are all also quite handy:

```sh
brew install --cask imageoptim
brew install --cask figma
brew install --cask rectangle
brew install --cask typeface
brew install --cask via
brew install --cask vlc
```

This, of course, is not an exhaustive list of the apps I install. But it's what I'll need in the first instance.

## Work applications

If this is a work machine, install:

```sh
brew install --cask screaming-frog-seo-spider
brew install --cask slack
brew install --cask zoom
```

I tend not to run Google Chrome on my personal machines, but it is necessary for testing client work.

```sh
brew install --cask google-chrome
```

## Desktop and dock

I'll tidy up the menu bar, and run this handy script to get the macOS dock working in a slightly nicer way:

```sh
defaults write com.apple.dock autohide -bool true &&
defaults write com.apple.dock autohide-delay -float 0 &&
defaults write com.apple.dock autohide-time-modifier -float 0.5 &&
killall Dock
```

This script does a few things:

1. Enables auto-hiding of the dock
2. Sets the auto-hide delay to zero
3. Speeds up the hide/reveal animation

## Finishing touches

Turn off all but the most essential notifications and alerts.

Set a nice wallpaper and screensaver.

Install some more fonts.

Download some code.

Get to work.
