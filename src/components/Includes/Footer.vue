<template>
  <footer id="footer">
    <div class="container">
      <p>
        <span>
          &copy; 2021 - My Store.
        </span>
        <span>
          All rights reserved.
        </span>
        <span>
          Developed by
          <a href="https://guimont.me" target="_blank" rel="noopener noreferrer"
            >Gui Mont</a
          >
        </span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
footer#footer {
  background-color: $secondary;
  text-align: center;
  position: relative;
  top: 80px;
  p {
    color: $offwhite;
    margin-bottom: 0;
    span {
      display: inline-block;
      margin: 0 0.5rem;
    }
    a {
      text-decoration: none;
      color: $offwhite;
      &:hover {
        color: $lightyellow;
        text-shadow: 1px 2px 4px $dark_primary;
      }
    }
  }
}
</style>
