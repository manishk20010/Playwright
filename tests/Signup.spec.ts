
// Week 1: Fundamentals
// - Day 1–2: Write simple for loops (print numbers 1–10, print multiplication tables).
// - Day 3–4: Practice if conditions (check even/odd, greater/less than).
// - Day 5–7: Combine for + if (print all even numbers between 1–50).

// Week 2: Problem Patterns
// - Day 8–9: FizzBuzz (classic logic exercise).
// - Day 10–11: Factorial of a number using a loop.
// - Day 12–13: Sum of digits in a number.
// - Day 14: Nested loops (print a triangle of *).

// Week 3: Arrays & Strings
// - Day 15–16: Find the largest number in an array.
// - Day 17–18: Count vowels in a string.
// - Day 19–20: Reverse a string manually with a loop.
// - Day 21: Palindrome check.

// Week 4: Applied Logic
// - Day 22–23: Prime number checker.
// - Day 24–25: Generate Fibonacci sequence.
// - Day 26–27: Remove duplicates from an array.
// - Day 28: Mini-project: Build a simple login simulation (check username/password with if).


import { test, expect, request } from '@playwright/test';

test('Sign up with GetNada email', async ({ page }) => {
  const apiContext = await request.newContext();

  // Step 1: Generate inbox
  const prefix = 'test' + Date.now();
  const inboxResponse = await apiContext.get(`https://inboxes.com/api/v3/GET/inboxes/${prefix}`);
  const inboxData = await inboxResponse.json();
  const email = inboxData.inboxresponse;
  console.log(email)
})
//   // Step 2: Use email in sign-up
//   await page.goto('https://www.demoblaze.com/');
//   await page.fill('#loginusername', email);
//   await page.fill('#password', 'StrongPassword123!');
//   await page.click('#submit');

//   // Step 3: Poll for verification email
//   let message;
//   for (let i = 0; i < 10; i++) {
//     const messagesResponse = await apiContext.get(`https://getnada.com/api/v1/messages/${prefix}`);
//     const messagesData = await messagesResponse.json();
//     if (messagesData.messages.length > 0) {
//       message = messagesData.messages[0];
//       break;
//     }
//     await new Promise(r => setTimeout(r, 5000)); // wait 5s
//   }

//   // Step 4: Extract verification link
//   const messageResponse = await apiContext.get(`https://getnada.com/api/v1/messages/${message.uid}`);
//   const messageData = await messageResponse.json();
//   const verificationLink = messageData.html.match(/https:\/\/yourwebsite\.com\/verify\/\S+/)[0];

//   await page.goto(verificationLink);
//   await expect(page.locator('#success')).toHaveText('Account verified');
// });
