<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">LabIV - TP06</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/">HOME</b-nav-item>
            <b-nav-item href="/location" >Donde Estamos</b-nav-item>
            <b-nav-item href="/products" >Productos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>