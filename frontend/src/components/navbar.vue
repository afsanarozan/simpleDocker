<template>
  <div>
      <div class="container-fluid">
      <div class="row">
        <b-navbar toggleable="lg col-md-8 food" type="light" variant="white">
          <b-navbar-nav class="mx-auto">
            <b-navbar-brand href="#" style="font-family: Airbnb Cereal App;">Food Items</b-navbar-brand>      
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </b-navbar-nav>

          <b-collapse id="nav-collapse" is-nav>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <b-navbar toggleable="lg col-md-4 cart justify-content-center"  variant="faded" type="light">
          <b-navbar-brand href="#">Cart<span class="lingkaran">{{ cart.length }}</span></b-navbar-brand>
        </b-navbar>
      </div>
      
      </div>
  </div>
</template>

<script>
export default {
    name: navbar,
}
</script>

<style>

</style>