import React from 'react';


function  showRelevanceSort(sort) {
   if (sort === "occupation") {
       return occupationSort()
   } else if (sort === "popularity") {
       return popularitySort()
   } else {
       return dateSort()
   }
}


function occupationSort() {
   return (
       <div>
           <h2 class="sort-name">Inspiration & Motivation</h2>
               <div>
                   <h3 class="author-name">Seuss</h3>
                       <div class="quote">
                           <h3 class="quote-text">“How did it get so late so soon?”</h3>
                           <p class="quote-author">-Dr. Seuss</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Seuss</h3>
                       <div class="quote">
                           <h3 class="quote-text">"Don't cry because it's over. Smile because it happened."</h3>
                           <p class="quote-author">-Dr. Seuss</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Disney</h3>
                       <div class="quote">
                           <h3 class="quote-text">"The way to get started is to quit talking and begin doing."</h3>
                           <p class="quote-author">-Walt Disney</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">West</h3>
                       <div class="quote">
                           <h3 class="quote-text">"You only live once, but if you do it right, once is enough."</h3>
                           <p class="quote-author">-Mae West</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Frost</h3>
                       <div class="quote">
                           <h3 class="quote-text">"In three words I can sum up everything I've learned about life: it goes on."</h3>
                           <p class="quote-author">-Robert Frost</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Winfrey</h3>
                       <div class="quote">
                           <h3 class="quote-text">"If you look at what you have in life, you'll always have more."</h3>
                           <p class="quote-author">-Oprah Winfrey</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Franklin</h3>
                       <div class="quote">
                           <h3 class="quote-text">"Well done is better than well said."</h3>
                           <p class="quote-author">-Benjamin Franklin</p>
                       </div>
               </div>
               <h2 class="sort-name">Faith & Spirituality</h2>
               <div>
                   <h3 class="author-name">Kearon</h3>
                       <div class="quote">
                           <h3 class="quote-text">“God is in relentless pursuit of you. He wants all of his children to choose to return to him, and he employs every possible measure to bring you back.”</h3>
                           <p class="quote-author">-Elder Patrick Kearon</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Renlund</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Most people who are struggling know that they are struggling. We should not be judgmental; our judgment is neither helpful nor welcome, and it is most often ill-informed. … After all, we are all struggling in our own way. None of us earns salvation.”</h3>
                           <p class="quote-author">-Elder Dale Renlund</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Stevenson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Some are so focused on keeping the commandments that they show little tolerance of those they see as less righteous. Some find it difficult to love those who are choosing to live their lives outside of the covenant or even away from any religious participation.”</h3>
                           <p class="quote-author">-Elder Gary Stevenson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Oaks</h3>
                       <div class="quote">
                           <h3 class="quote-text">“We are instructed to wear temple garments continuously, with the only exceptions being those obviously necessary. Because covenants do not take a day off, to remove one’s garments can be understood as a disclaimer of the responsibilities and blessings to which they relate.”</h3>
                           <p class="quote-author">-President Dallin H. Oaks</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“I pray that you will seek for the Holy Ghost to guide you in your study as you contemplate the truths taught from this pulpit. They have truly been heaven sent.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“A covenant made with God should be regarded not as restrictive but as protective.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <h2 class="sort-name">Personal Growth & Relationships</h2>
               <div>
                   <h3 class="author-name">Kearon</h3>
                       <div class="quote">
                           <h3 class="quote-text">“We do not need to carry the burden of the choices of others. We can choose to forgive and move forward with our lives.”</h3>
                           <p class="quote-author">-Elder Patrick Kearon</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Aristotle</h3>
                       <div class="quote">
                           <h3 class="quote-text">“It is during our darkest moments that we must focus to see the light.”</h3>
                           <p class="quote-author">-Aristotle</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">King Jr.</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”</h3>
                           <p class="quote-author">-Martin Luther King Jr.</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Angelou</h3>
                       <div class="quote">
                           <h3 class="quote-text">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</h3>
                           <p class="quote-author">-Maya Angelou</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Wilde</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Be yourself; everyone else is already taken.”</h3>
                           <p class="quote-author">-Oscar Wilde</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Baruch</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</h3>
                           <p class="quote-author">-Bernard Baruch</p>
                       </div>
               </div>
               <h2 class="sort-name">Resilience & Change</h2>
               <div>
                   <h3 class="author-name">Eminem</h3>
                       <div class="quote">
                           <h3 class="quote-text">“The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.”</h3>
                           <p class="quote-author">Eminem</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Eminem</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Everybody has goals, aspirations or whatever, and everybody has been at a point in their life where nobody believed in them.”</h3>
                           <p class="quote-author">-Eminem</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Twain</h3>
                       <div class="quote">
                           <h3 class="quote-text">“If you tell the truth, you don't have to remember anything.”</h3>
                           <p class="quote-author">-Mark Twain</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Purkey</h3>
                       <div class="quote">
                           <h3 class="quote-text">“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”</h3>
                           <p class="quote-author">-William Purkey</p>
                       </div>
               </div>
               <h2 class="sort-name">Wisdom & Reflection</h2>
               <div>
                   <h3 class="author-name">Rasband</h3>
                       <div class="quote">
                           <h3 class="quote-text">“In the heat of the moment, words can sting and sink painfully deep into the soul — and stay there. Our words on the internet, texting, social media or tweets, take on a life of their own. So be careful what you say and how you say it.”</h3>
                           <p class="quote-author">-Elder Ronald Rasband</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Obedience brings success; exact obedience brings miracles.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“My dear brothers and sisters, the joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
       </div>
   );
}


function popularitySort() {
   return (
       <div>
               <div>
                   <h3 class="author-name">Seuss</h3>
                       <div class="quote">
                           <h3 class="quote-text">"Don't cry because it's over. Smile because it happened."</h3>
                           <p class="quote-author">-Dr. Seuss</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Wilde</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Be yourself; everyone else is already taken.”</h3>
                           <p class="quote-author">-Oscar Wilde</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">King Jr.</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”</h3>
                           <p class="quote-author">-Martin Luther King Jr.</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">West</h3>
                       <div class="quote">
                           <h3 class="quote-text">"You only live once, but if you do it right, once is enough."</h3>
                           <p class="quote-author">-Mae West</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Franklin</h3>
                       <div class="quote">
                           <h3 class="quote-text">"Well done is better than well said."</h3>
                           <p class="quote-author">-Benjamin Franklin</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Disney</h3>
                       <div class="quote">
                           <h3 class="quote-text">"The way to get started is to quit talking and begin doing."</h3>
                           <p class="quote-author">-Walt Disney</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Aristotle</h3>
                       <div class="quote">
                           <h3 class="quote-text">“It is during our darkest moments that we must focus to see the light.”</h3>
                           <p class="quote-author">-Aristotle</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Angelou</h3>
                       <div class="quote">
                           <h3 class="quote-text">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</h3>
                           <p class="quote-author">-Maya Angelou</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Winfrey</h3>
                       <div class="quote">
                           <h3 class="quote-text">"If you look at what you have in life, you'll always have more."</h3>
                           <p class="quote-author">-Oprah Winfrey</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Purkey</h3>
                       <div class="quote">
                           <h3 class="quote-text">“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”</h3>
                           <p class="quote-author">-William Purkey</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Seuss</h3>
                       <div class="quote">
                           <h3 class="quote-text">“How did it get so late so soon?”</h3>
                           <p class="quote-author">-Dr. Seuss</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Eminem</h3>
                       <div class="quote">
                           <h3 class="quote-text">“The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.”</h3>
                           <p class="quote-author">Eminem</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Eminem</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Everybody has goals, aspirations or whatever, and everybody has been at a point in their life where nobody believed in them.”</h3>
                           <p class="quote-author">-Eminem</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Frost</h3>
                       <div class="quote">
                           <h3 class="quote-text">"In three words I can sum up everything I've learned about life: it goes on."</h3>
                           <p class="quote-author">-Robert Frost</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Twain</h3>
                       <div class="quote">
                           <h3 class="quote-text">“If you tell the truth, you don't have to remember anything.”</h3>
                           <p class="quote-author">-Mark Twain</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Obedience brings success; exact obedience brings miracles.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“My dear brothers and sisters, the joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“A covenant made with God should be regarded not as restrictive but as protective.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Kearon</h3>
                       <div class="quote">
                           <h3 class="quote-text">“God is in relentless pursuit of you. He wants all of his children to choose to return to him, and he employs every possible measure to bring you back.”</h3>
                           <p class="quote-author">-Elder Patrick Kearon</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Kearon</h3>
                       <div class="quote">
                           <h3 class="quote-text">“We do not need to carry the burden of the choices of others. We can choose to forgive and move forward with our lives.”</h3>
                           <p class="quote-author">-Elder Patrick Kearon</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Renlund</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Most people who are struggling know that they are struggling. We should not be judgmental; our judgment is neither helpful nor welcome, and it is most often ill-informed. … After all, we are all struggling in our own way. None of us earns salvation.”</h3>
                           <p class="quote-author">-Elder Dale Renlund</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Stevenson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Some are so focused on keeping the commandments that they show little tolerance of those they see as less righteous. Some find it difficult to love those who are choosing to live their lives outside of the covenant or even away from any religious participation.”</h3>
                           <p class="quote-author">-Elder Gary Stevenson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Oaks</h3>
                       <div class="quote">
                           <h3 class="quote-text">“We are instructed to wear temple garments continuously, with the only exceptions being those obviously necessary. Because covenants do not take a day off, to remove one’s garments can be understood as a disclaimer of the responsibilities and blessings to which they relate.”</h3>
                           <p class="quote-author">-President Dallin H. Oaks</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Rasband</h3>
                       <div class="quote">
                           <h3 class="quote-text">“In the heat of the moment, words can sting and sink painfully deep into the soul — and stay there. Our words on the internet, texting, social media or tweets, take on a life of their own. So be careful what you say and how you say it.”</h3>
                           <p class="quote-author">-Elder Ronald Rasband</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Baruch</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</h3>
                           <p class="quote-author">-Bernard Baruch</p>
                       </div>
               </div>
       </div>
   );
}


function dateSort() {
   return (
       <div>
               <div>
                   <h3 class="author-name">Aristotle</h3>
                       <div class="quote">
                           <h3 class="quote-text">“It is during our darkest moments that we must focus to see the light.”</h3>
                           <p class="quote-author">-Aristotle</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Franklin</h3>
                       <div class="quote">
                           <h3 class="quote-text">"Well done is better than well said."</h3>
                           <p class="quote-author">-Benjamin Franklin</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Twain</h3>
                       <div class="quote">
                           <h3 class="quote-text">“If you tell the truth, you don't have to remember anything.”</h3>
                           <p class="quote-author">-Mark Twain</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Wilde</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Be yourself; everyone else is already taken.”</h3>
                           <p class="quote-author">-Oscar Wilde</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">West</h3>
                       <div class="quote">
                           <h3 class="quote-text">"You only live once, but if you do it right, once is enough."</h3>
                           <p class="quote-author">-Mae West</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Seuss</h3>
                       <div class="quote">
                           <h3 class="quote-text">“How did it get so late so soon?”</h3>
                           <p class="quote-author">-Dr. Seuss</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Disney</h3>
                       <div class="quote">
                           <h3 class="quote-text">"The way to get started is to quit talking and begin doing."</h3>
                           <p class="quote-author">-Walt Disney</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">King Jr.</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”</h3>
                           <p class="quote-author">-Martin Luther King Jr.</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Frost</h3>
                       <div class="quote">
                           <h3 class="quote-text">"In three words I can sum up everything I've learned about life: it goes on."</h3>
                           <p class="quote-author">-Robert Frost</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Seuss</h3>
                       <div class="quote">
                           <h3 class="quote-text">"Don't cry because it's over. Smile because it happened."</h3>
                           <p class="quote-author">-Dr. Seuss</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Angelou</h3>
                       <div class="quote">
                           <h3 class="quote-text">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</h3>
                           <p class="quote-author">-Maya Angelou</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Eminem</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Everybody has goals, aspirations or whatever, and everybody has been at a point in their life where nobody believed in them.”</h3>
                           <p class="quote-author">-Eminem</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Eminem</h3>
                       <div class="quote">
                           <h3 class="quote-text">“The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.”</h3>
                           <p class="quote-author">Eminem</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Winfrey</h3>
                       <div class="quote">
                           <h3 class="quote-text">"If you look at what you have in life, you'll always have more."</h3>
                           <p class="quote-author">-Oprah Winfrey</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Kearon</h3>
                       <div class="quote">
                           <h3 class="quote-text">“God is in relentless pursuit of you. He wants all of his children to choose to return to him, and he employs every possible measure to bring you back.”</h3>
                           <p class="quote-author">-Elder Patrick Kearon</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Kearon</h3>
                       <div class="quote">
                           <h3 class="quote-text">“We do not need to carry the burden of the choices of others. We can choose to forgive and move forward with our lives.”</h3>
                           <p class="quote-author">-Elder Patrick Kearon</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Renlund</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Most people who are struggling know that they are struggling. We should not be judgmental; our judgment is neither helpful nor welcome, and it is most often ill-informed. … After all, we are all struggling in our own way. None of us earns salvation.”</h3>
                           <p class="quote-author">-Elder Dale Renlund</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Stevenson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Some are so focused on keeping the commandments that they show little tolerance of those they see as less righteous. Some find it difficult to love those who are choosing to live their lives outside of the covenant or even away from any religious participation.”</h3>
                           <p class="quote-author">-Elder Gary Stevenson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Oaks</h3>
                       <div class="quote">
                           <h3 class="quote-text">“We are instructed to wear temple garments continuously, with the only exceptions being those obviously necessary. Because covenants do not take a day off, to remove one’s garments can be understood as a disclaimer of the responsibilities and blessings to which they relate.”</h3>
                           <p class="quote-author">-President Dallin H. Oaks</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“I pray that you will seek for the Holy Ghost to guide you in your study as you contemplate the truths taught from this pulpit. They have truly been heaven sent.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“Obedience brings success; exact obedience brings miracles.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“My dear brothers and sisters, the joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Nelson</h3>
                       <div class="quote">
                           <h3 class="quote-text">“A covenant made with God should be regarded not as restrictive but as protective.”</h3>
                           <p class="quote-author">-President Russell Nelson</p>
                       </div>
               </div>
               <div>
                   <h3 class="author-name">Purkey</h3>
                       <div class="quote">
                           <h3 class="quote-text">“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”</h3>
                           <p class="quote-author">-William Purkey</p>
                       </div>
               </div>
       </div>
   );
}


export default showRelevanceSort;
