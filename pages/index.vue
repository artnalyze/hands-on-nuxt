<template>
  <div class="row">
    <div class="grid-x">
      <div class="medium-4  cell" data-aos="fade-up"> <!--medium-offset-3-->
        <img class="welcome" src="~/assets/images/sample-0.jpg" alt="" />
      </div>
      <div class="medium-4 cell" data-aos="fade-up"><!--medium-offset-3-->
        <img src="~/assets/images/sample-1.jpg" alt="" />
      </div>
      <div class="medium-4 cell" data-aos="fade-up"><!--medium-offset-3-->
        <img src="~/assets/images/sample-2.jpg" alt="" />
      </div>
    </div>
    <div id="accordion">
      <h3>Section 1</h3>
      <div>
        <p>
          Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
          Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
          condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
          Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu
          ante scelerisque vulputate.
        </p>
      </div>
      <h3>Section 2</h3>
      <div>
        <p>
          Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
          purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
          porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non
          quam. In suscipit faucibus urna.
        </p>
      </div>
      <h3>Section 3</h3>
      <div>
        <p>
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque
          lobortis. Phasellus pellentesque purus in massa. Aenean in pede.
          Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed
          commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis
          leo purus venenatis dui.
        </p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </div>
      <h3>Section 4</h3>
      <div>
        <p>
          Cras dictum. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
          mauris vel est.
        </p>
        <p>
          Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
    <div class="container">
      <p>Hello {{ name }}</p>
      <nuxt-link to="/about">
        Go to /about
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import 'aos/dist/aos.css'
import aos from 'aos'

export default {
  mounted() {
    aos.init();
    $("#accordion").accordion();
  },
  head () {
    return {
      title: 'Hello World',
      meta: [
        { hid: 'description', name: 'description', content: 'My Nuxt Portfolio' },
      ]
    }
  },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ name: 'world' })
      }, 1000)
    })
  }
};
</script>
