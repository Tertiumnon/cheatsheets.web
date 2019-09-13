/*!
 * Tertium.JS
  * Author: Vit Tertiumnon
 * Email: tertiumnon@gmail.com
 * Licensed under the GPL v.3 license
 * Notice: Not all of these scripts were created by author
 */

var tertium = {};

// checking "url or not"
tertium.is_valid_url = function(url) {
    var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if(RegExp.test(url)){
        return true;
    }else{
        return false;
    }
};

// checking "is integral?"
tertium.is_int = function(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
};

// window, container sizes
tertium.get_windows_sizes = function() {
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var $cWidth = $('.container').width();
    var $cHeight = $('.container').height();
};

// date formatting, formats: default, dd.mm.yyyy
tertium.date_input_format = function(object) {
    var dateinputs = document.getElementsByClassName(object.class);
    dateinputs = Array.prototype.slice.call(dateinputs);
    var value_array, dd, mm, yyyy;
    function setDay(dayInt, element, e, delimiter, syntax) {
        var value = element.value;
        if (dayInt.length == 1 && tertium_is_int(dayInt) && dayInt > 3 && e.keyCode !== 8 && e.keyCode !== 46 || dayInt.length == 2 && tertium_is_int(dayInt) && dayInt <= 31 && e.keyCode !== 8 && e.keyCode !== 46) {
            // element.value += delimiter;
        } else if (dayInt.length == 2 && tertium_is_int(dayInt) && dayInt > 31 && e.keyCode !== 8 && e.keyCode !== 46 || dayInt == 0) {
            element.value = value.slice(0, -1);
        }
    }
    function setMonth(monthInt, element, e, delimiter, syntax) {
        var value = element.value;
        if (monthInt.length == 1 && tertium_is_int(monthInt) && monthInt > 1 && e.keyCode !== 8 && e.keyCode !== 46 || monthInt.length == 2 && tertium_is_int(monthInt) && monthInt <= 12 && e.keyCode !== 8 && e.keyCode !== 46) {
            // element.value += delimiter;
        } else if (monthInt.length == 2 && tertium_is_int(monthInt) && monthInt > 12 && e.keyCode !== 8 && e.keyCode !== 46 || monthInt.length > 2) {
            element.value = value.slice(0, -1);
        }
    }
    function setYear(yearInt, element, e, delimiter, syntax) {
        var value = element.value;
        if (yearInt.length > 4) {
            element.value = value.slice(0, -1);
        }
    }
    if (object.format == 'dd.mm.yyyy') {
        var delimiter = '.';
    } else if (object.format == 'dd/mm/yyyy') {
        var delimiter = '/';
    } else if (object.format == 'dd-mm-yyyy' || object.format == 'yyyy-mm-dd') {
        var delimiter = '-';
    }
    var getFormatIndex = function(format, searchText) {
        // console.log(format, searchText);
        var indexText = format.indexOf(searchText);
        // console.log(indexText);
        if (indexText == 0) {return 0;}
        else if (indexText == 3 || indexText == 5) {return 1;}
        else {return 2;}
    };
    var dayIndex = getFormatIndex(object.format, 'dd');
    var monthIndex = getFormatIndex(object.format, 'mm');
    var yearIndex = getFormatIndex(object.format, 'yyyy');
    // console.log(dayIndex, monthIndex, yearIndex);
    dateinputs.forEach(function set_placeholder(element) {
        element.setAttribute("placeholder", object.format);
    });
    dateinputs.forEach(function set_mask(element) {
        element.addEventListener('keyup', function(e) {
            value_array = element.value;
            value_array = value_array.split(delimiter);
            dd = value_array[dayIndex];
            mm = value_array[monthIndex];
            yyyy = value_array[yearIndex];
            // console.log(dd, mm, yyyy);
            console.log('value_array.length', value_array.length);
            if (value_array.length == 1 && object.syntax == 'default' && dd <= 31) {
                setDay(dd, element, e, delimiter);
            } else if (value_array.length == 1 && object.syntax == 'default') {
                setYear(dd, element, e, delimiter);
            } else if (value_array.length == 1 && object.syntax == 'strict') {
                setDay(dd, element, e, delimiter);
            }
            if (value_array.length == 2 && object.syntax == 'default' && dd <= 12) {
                setYear(mm, element, e, delimiter);
            } else if (value_array.length == 2 && object.syntax == 'default') {
                setDay(dd, element, e, delimiter);
                setMonth(mm, element, e, delimiter);
            } else if (value_array.length == 2 && object.syntax == 'strict') {
                setDay(dd, element, e, delimiter);
                setMonth(mm, element, e, delimiter);
            }
            if (value_array.length == 3) {
                setDay(dd, element, e, delimiter);
                setMonth(mm, element, e, delimiter);
                setYear(yyyy, element, e, delimiter);
            }
            if (value_array.length > 3) {
                element.value = value.slice(0, -1);
            }
        });
    });
};

tertium.string_to_link = function(string) {
    var link = string.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    return link;
};
