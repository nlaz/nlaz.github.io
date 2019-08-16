import React from 'react';

function Home () {
  return (
    <div>
      <div class="mw9 center w-100 mb3 mb6-ns pv4 ph3 ph5-m ph5-l">
        <div class='ph2 center text-center measure'>
          <h1 class='f2 f1-ns  ma0'>Niko Lazaris</h1>
          <h2 class='f3 mt0 normal'>building things on the <span class='internet'>internet</span>.</h2>
        </div>
      </div>

      <div class='absolute top-0 right-0 left-0 flex justify-between items-center pv4 ph4 ph5-ns'>
        <div class='flex items-content mr1'>
          <span class='f3'>🍕</span>
          <div class="relative ml3">
            <input class="absolute z-5 w-100 h-100 o-0 pointer checkbox" type="checkbox" />
            <div class="relative bg-mid-gray overflow-hidden v-mid bg-animate checkbox-wrapper ba b--light-gray">
              <div class="absolute left-0 bg-white shadow-4 checkbox-toggle"></div>
            </div>
          </div>
        </div>

        <div>
          <ul class='list flex mid-gray'>
            <li><a class='color-inherit pr3' href="https://github.com/nlaz" target="_blank" rel="noopener noreferrer"><i class="fab fa-lg fa-github-alt"></i></a></li>
            <li><a class='color-inherit pr3' href="https://twitter.com/nikolazaris" target="_blank" rel="noopener noreferrer"><i class="fab fa-lg fa-twitter"></i></a></li>
            <li><a class='color-inherit' href="mailto:nikolazaris@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-lg fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
