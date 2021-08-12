module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#FFF',
                secundary: '#353B48',
                red: '#FB0000',
                lightRed: '#E83838',
                gray: '#545454',
                darkGray: '#333',
                lowContrast: '#D6D6D6' ,
                background: '#d6d4d4',
                backgroundSecundary: '#608b9b'
            },
            fontFamily : {
                body : ['Heebo']
            },
            backgroundImage: theme => ({
                'hero': "url('/01-sm.png')",                
               })
        },
        grayscale: {
            100: '100%',
        },
        grayscale: ['hover']
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}