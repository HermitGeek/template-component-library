<template>
    <div v-hljs>
        welcome

        <colorPicker></colorPicker>

        <pre>
            dddd
        </pre>
    </div>
</template>

<script>
import colorPicker from '../../packages/color-picker';


export default {
    name: 'welcome',

    components: {
        colorPicker
    }

}
</script>