<template>
  <v-treeview :items="items">
  </v-treeview>
</template>

<script>

    export default
    {
        data:() =>
        ({
            items:
            [
                {
                    id: 1,
                    name: 'Stage LotA :',
                    children:
                    [
                        {
                            id: 2, name: '1er jour :',
                                children:
                                [
                                {
                                    id: 3,
                                    name: 'Installation',
                                },
                                {
                                    id: 4,
                                    name: 'Demarrage des cours'
                                }
                            ]
                        },
                        {
                            id: 5, name: '2ème jour :',
                                children:
                                [
                                {
                                    id: 6,
                                    name: 'Cours sur Laravel fini'
                                },
                                {
                                    id: 7,
                                    name: 'Cours sur Vue'
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    }

</script>
