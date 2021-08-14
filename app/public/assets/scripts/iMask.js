function masked(id, masker, boolean) {

    IMask(document.getElementById(id), {
        mask: masker,
        lazy: boolean,
    });    
};

masked('date-mask', '00/00/0000', false)
masked('time-mask', '00:00', false)
masked('aerodrome', 'aaaa', false)
masked('registration', 'aa-aaa', false)