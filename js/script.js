// Copyright (c) 2023 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-6/sw.js", {
    scope: "/Assignment-6/",
  })
}

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()

    document.getElementById("dog-image").innerHTML =
    '<img src="' +
      jsonData.url +
      '" alt="dog image" class="center" width="100" height="200"' +
      '>'

    const dogData = await fetch("https://dog-api.kinduff.com/api/facts")
    const jsonDogData = await dogData.json()
    document.getElementById("dog-fact").innerHTML = jsonDogData.facts

  } catch (err) {
    console.log(err)
  }
}

getImage("https://random.dog/woof.json")
