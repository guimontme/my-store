<template>
  <footer id="footer">
    <div class="container">
      <p>
        &copy; 2021 - My Store. All rights reserved - Developed by
        <a href="https://guimont.me" target="_blank" rel="noopener noreferrer"
          >Gui Mont</a
        >
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
  padding: 1rem 0;
  background-color: $secondary;
  text-align: center;
  margin-top: 20px;
  position: relative;
  top: 65px;
  p {
    color: $orange;
    a {
      text-decoration: none;
      color: $orange;
      &:hover {
        text-shadow: 1px 2px 4px $dark_primary;
      }
    }
  }
}
</style>
