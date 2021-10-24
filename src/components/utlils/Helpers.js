const Helpers = {
    groupPriceEvolution: (listPriceGroup) => {
        let response = {
            dates: [],
            series: []
        }
        let dates = [];

        var result = listPriceGroup.reduce(function (r, a) {
            r[a.sku] = r[a.sku] || [];
            r[a.sku].push(a);
            return r;
        }, Object.create(null));
        result = Object.entries(result)
        //console.log(result);
        result.forEach(element => {
            let add_name = true;
            let item = {
                name: '',
                data: []
            }
            element[1].forEach(element => {
                //Genero las series
                if (add_name) {
                    item.name = element.name
                }
                item.data.push(element.price);
                add_name = false;

                //Genero las fechas
                if (!dates.includes(element.dateExtraction)) {
                    dates.push(element.dateExtraction);
                }
            })
            response.series.push(item)
        });

        response.dates = dates.sort(function (a, b) {
            a = a.split('/').reverse().join('');
            b = b.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        })
        console.log(response);

        return response
    }
};

export default Helpers;
