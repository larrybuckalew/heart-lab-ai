import matplotlib.pyplot as plt
import plotly.express as px
import pandas as pd

class DataVisualizer:
    @staticmethod
    def create_line_chart(data, x_col, y_cols, title='Line Chart', output_path=None):
        plt.figure(figsize=(10, 6))
        for col in y_cols:
            plt.plot(data[x_col], data[col], label=col)
        plt.title(title)
        plt.xlabel(x_col)
        plt.ylabel('Values')
        plt.legend()
        
        if output_path:
            plt.savefig(output_path)
        return plt
    
    @staticmethod
    def create_interactive_chart(data, x_col, y_cols, title='Interactive Chart'):
        df_melted = data.melt(id_vars=[x_col], value_vars=y_cols, var_name='Category', value_name='Value')
        fig = px.line(df_melted, x=x_col, y='Value', color='Category', title=title)
        return fig