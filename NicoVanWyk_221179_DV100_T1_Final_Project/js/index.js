$(document).ready(function () {

    $.ajax({
        url: 'recentReleases.json', // Path to JSON file
        dataType: 'json',
        success: function (data) {
            // Iterate through the JSON data
            $.each(data, function (index, item) {
                // Create HTML elements for each item
                var albumItem = $('<div class="col-sm-3"></div>');
                var albumImg = $('<div class="album_img"></div>').css('background-image', 'url(' + item.albumImage + ')');
                var hoverItems = $('<div class="hover_items"></div>');
                var playImg = $('<div class="play_img"></div>').append('<img src="../assets/icons/other/play_icon.svg" alt="">');
                var playDiv = $('<div class="play_div"></div>');
                var artistName = $('<p class="play_title lora white" style="font-size: 12px;"></p>').text(item.artistName);
                var albumTitle = $('<p class="play_text poppins font_18 white"></p>').text(item.albumTitle);

                // Populate HTML elements with data
                playDiv.append(artistName, albumTitle);
                hoverItems.append(playImg, playDiv);
                albumImg.append(hoverItems);
                albumItem.append(albumImg);

                // Append HTML elements to container
                $('#albumRow .row').append(albumItem);
            });
        }
    });

    $.ajax({
        url: 'popularAlbums.json', // Path to JSON file
        dataType: 'json',
        success: function (data) {
            // Iterate through the JSON data
            $.each(data, function (index, item) {
                // Create HTML elements for each item
                var albumItem = $('<div class="col-sm-3"></div>');
                var albumImg = $('<div class="album_img"></div>').css('background-image', 'url(' + item.albumImage + ')');
                var hoverItems = $('<div class="hover_items"></div>');
                var playImg = $('<div class="play_img"></div>').append('<img src="../assets/icons/other/play_icon.svg" alt="">');
                var playDiv = $('<div class="play_div"></div>');
                var artistName = $('<p class="play_title lora white" style="font-size: 12px;"></p>').text(item.artistName);
                var albumTitle = $('<p class="play_text poppins font_18 white"></p>').text(item.albumTitle);

                // Populate HTML elements with data
                playDiv.append(artistName, albumTitle);
                hoverItems.append(playImg, playDiv);
                albumImg.append(hoverItems);
                albumItem.append(albumImg);

                // Append HTML elements to container
                $('#albumRowPopular .row').append(albumItem);
            });
        }
    });

    $.ajax({
        url: 'playlist.json', // Path to JSON file
        dataType: 'json',
        success: function (data) {
            // Reference to the table body
            var tbody = $('.table tbody');

            // Iterate through the JSON data
            $.each(data, function (index, item) {
                // Create a new table row
                var row = $('<tr></tr>');

                // Add data to the row
                row.append('<td class="lora font_14">' + item.playlistNum + '</td>');
                row.append('<td><p class="poppins font_14">' + item.songTitle + '</p><a class="poppins font_12 playlist_content">' + item.artistName + '</a></td>');
                row.append('<td class="poppins font_14">' + item.albumTitle + '</td>');
                row.append('<td class="poppins font_14">' + item.duration + '</td>');
                row.append('<td class="poppins font_18"><img src="../assets/icons/media/options_table_icon.svg" alt=""></td>');

                // If the song is active, add the currently playing icon
                if (item.active) {
                    row.find('td:first-child').html('<img src="../assets/icons/media/currently_playing_icon.svg" alt="">');
                }

                // Append the row to the table body
                tbody.append(row);
            });
        }
    });
    
});