function object_print()
{
	// オブジェクトの定義
	const score =
	{
		// 各種成績 
		jap: 0,		// 日本語
		math: 0,	// 数学
		eng: 0,		// 英語
		sum: 0,		// 合計
		ave: 0.0,	// 平均

		// 点数画面表示 
		show_score: function()
		{
			alert("日本語:"+this.jap+",数学:"+this.math+",英語:"+this.eng+"\n"+"合計:"+this.sum+"平均:"+this.ave);
		},

		set_jap: function(point)
		{
			if(point <0 || point>100)
			{
				alert("日本語の点数が不正です("+point+")");
				return -1;
			}
			else
			{
				this.jap=point;
				this.calc_sum();
				this.calc_ave();
			}
		},

		set_math: function(point)
		{
			if(point <0 || point>100)
			{
				alert("数学の点数が不正です("+point+")");
				return -1;
			}
			else
			{
				this.math=point;
				this.calc_sum();
				this.calc_ave();
			}
		},

		set_eng: function(point)
		{
			if(point <0 || point>100)
			{
				alert("英語の点数が不正です("+point+")");
				return -1;
			}
			else
			{
				this.eng=point;
				this.calc_sum();
				this.calc_ave();
			}
		},
		
		calc_sum: function()
		{
			this.sum = this.math + this.eng +this.jap;
		},

		calc_ave: function()
		{
			this.ave = this.sum/3.0;
		}


	};

	const grade =
	{
		__proto__: score,
		science: 0,
		social: 0,

		set_science: function(point)
		{
			if(point <0 || point>100)
			{
				alert("理科の点数が不正です("+point+")");
				return -1;
			}
			else
			{
				this.science=point;
				this.calc_sum();
				this.calc_ave();
			}
		},

		set_social: function(point)
		{
			if(point <0 || point>100)
			{
				alert("社会の点数が不正です("+point+")");
				return -1;
			}
			else
			{
				this.social=point;
				this.calc_sum();
				this.calc_ave();
			}
		},

		calc_sum: function()
		{
			this.sum = this.jap +this.math+this.eng+this.science+this.social;
		},
		calc_ave: function()
		{
			this.ave = this.sum/5.0;
		},

		show_score: function()
		{
			alert("日本語:"+this.jap+",数学:"+this.math+",英語:"+this.eng+",理科:"+this.science+",社会:"+this.social+"\n"+"合計:"+this.sum+"平均:"+this.ave);
		},
	}

	grade.set_jap(10);
	grade.set_math(20);
	grade.set_eng(30);
	grade.set_social(40);
	grade.set_science(50);
	grade.show_score();

}
