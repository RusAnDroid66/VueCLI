<template>
  <div>
    <p>Hi, {{ user.name }}</p>
  </div>
</template>

<script>
    export default {
        props: [
            "user"
        ]
    }
</script>