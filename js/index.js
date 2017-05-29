(function($) {
	var reportController = {
		__name: 'handson.ReportController',

		__ready: function() {
			this.$find('input[name="reportDate"]').val(
				handson.utils.formatDateWithHyphen(new Date())
			);
			this.$find('input[name="startTime"]').val('09:00');
			this.$find('input[name="endTime"]').val(
				handson.utils.formatTime(new Date()));
		},

		'input, textarea focusout': function(context, $el) {
			//変数の定義
			var value = $el.val();
			var name = $el.attr('name');
			var error_class = 'has-error';
			var $msg = this.$find('.report-content').find('.msg');
			var $formGroup = $el.parents('.form-group');

			//除外条件の設定
			if (name == 'img'){
				return;
			}

			//入力チェック
			if (value == null || value == ''){
			}else{

			}
			}
			  //入力されていない場合の処理
				if ($formGroup.hasClass(error_class)){
					return;
				}
				$formGroup.addClass(error_class);
				var label = $formGroup.find('label').text();
				var $p = $('<p data-handson-input-name"' + name + '">');
				$p.append('<strong>' + label + 'を入力してください' + '</strong>');
				$msg.append($p);
				//入力されている場合の処理
				$formGroup.removeClass(error_class);
				$msg.find('p[data-handson-input-name"' + name + '"]').remove();

			//メッセージの表示、非表示の指定
			if ($msg.children().length != 0){
				$msg.show();
			}else{
				$msg.hide();
			}
		},

		'input[name="img"] change': function(context, $el) {
		},

		'.confirm click': function(context, $el) {
		},

	};

	h5.core.expose(reportController);
})(jQuery);
$(function() {
	h5.core.controller(document.body, handson.ReportController);
});
